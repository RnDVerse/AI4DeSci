# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.



# Configuration file for JupyterHub
import os
import yaml
from dockerspawner import DockerSpawner
    
c = get_config()  # noqa: F821

# Ensure /data directory exists
data_directory = '/data'
if not os.path.exists(data_directory):
    os.makedirs(data_directory)

# We rely on environment variables to configure JupyterHub so that we
# avoid having to rebuild the JupyterHub container every time we change a
# configuration parameter.

# Create a custom spawner class to handle volume and network configurations
class CustomDockerSpawner(DockerSpawner):
    def start(self):
        # Volumes map the host file/directory to the container file/directory
        # This configuration ensures that these paths are consistent and preserved across spawns
        self.volumes = {
            'jupyterhub-data': '/data',
            '/var/run/docker.sock': '/var/run/docker.sock:rw'
        }

        # Configure the network the containers will connect to
        self.network_name = 'jupyterhub-network'

        return super().start()

# Use the custom spawner
c.JupyterHub.spawner_class = CustomDockerSpawner


# Path to the configuration file in the container
c.JupyterHub.config_file = '/srv/jupyterhub/jupyterhub_config.py:ro'

# Spawn single-user servers as Docker containers
#c.JupyterHub.spawner_class = "dockerspawner.DockerSpawner"

# Spawn containers from this image
c.DockerSpawner.image = os.environ["DOCKER_NOTEBOOK_IMAGE"]

# Connect containers to this Docker network
network_name = os.environ["DOCKER_NETWORK_NAME"]
c.DockerSpawner.use_internal_ip = True
c.DockerSpawner.network_name = network_name

# Explicitly set notebook directory because we'll be mounting a volume to it.
# Most `jupyter/docker-stacks` *-notebook images run the Notebook server as
# user `jovyan`, and set the notebook directory to `/home/akash/notebook`.
# We follow the same convention.
notebook_dir = os.environ.get("DOCKER_NOTEBOOK_DIR", "/home/ai4desci/notebook")
c.DockerSpawner.notebook_dir = notebook_dir

# Mount the real user's Docker volume on the host to the notebook user's
# notebook directory in the container
c.DockerSpawner.volumes = {"jupyterhub-user-{username}": notebook_dir}

# Remove containers once they are stopped
c.DockerSpawner.remove = True

# For debugging arguments passed to spawned containers
c.DockerSpawner.debug = True

# User containers will access hub by container name on the Docker network
c.JupyterHub.hub_ip = "0.0.0.0"
c.JupyterHub.hub_port = 8080

# Persist hub data on volume mounted inside container
c.JupyterHub.cookie_secret_file = "/data/jupyterhub_cookie_secret"
c.JupyterHub.db_url = "sqlite:////data/jupyterhub.sqlite"

# Authenticate users with Native Authenticator
c.JupyterHub.authenticator_class = "nativeauthenticator.NativeAuthenticator"

# Allow anyone to sign-up without approval
c.NativeAuthenticator.open_signup = True

# Allowed admins
admin = os.environ.get("JUPYTERHUB_ADMIN")
if admin:
    c.Authenticator.admin_users = ['akash_admin']

# Load the YAML file containing project configurations
with open('collaborations.yaml', 'r') as file:
    project_config = yaml.load(file, Loader=yaml.FullLoader)

# Configure groups and roles based on the YAML file
c.JupyterHub.load_groups = {
    'collaborative': []  # Initialize the collaborative group
}

for project_name, project in project_config['projects'].items():
    # Get the members of the project
    members = project.get('members', [])
    print(f"Adding project {project_name} with members {members}")
    
    # Add them to a group for the project
    c.JupyterHub.load_groups[project_name] = members
    
    # Define a new user for the collaboration
    collab_user = f"{project_name}-collab"
    
    # Add the collaboration user to the 'collaborative' group to identify it as a collaboration account
    c.JupyterHub.load_groups['collaborative'].append(collab_user)

    # Finally, grant members of the project collaboration group access to the collab user's server,
    # and the admin UI so they can start/stop the server
    c.JupyterHub.load_roles.append({
        'name': f"collab-access-{project_name}",
        'scopes': [
            f"access:servers!user={collab_user}",
            f"admin:servers!user={collab_user}",
            "admin-ui",
            f"list:users!user={collab_user}",
        ],
        'groups': [project_name],
    })

