import streamlit as st
import itertools
import ui
st.set_page_config(
    page_title="AI4DeSci App Gallery",
    page_icon="images/AI4DeSci_icon.png",
    layout='wide'
)


def navbar():
    """Shows a sticky navigation bar with links to other apps at the top of the page."""
    st.write(
        """
        <style>
            /* Add a black background color to the top navigation */
            .topnav-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3.5rem;
                border-bottom: 1px solid rgba(38, 39, 48, 0.2);
                /* padding-left: 60px; */
                /* padding-top: 0.5rem;
                padding-bottom: 0.5rem; */
                /* padding-right: 100px; */
                background-color: white;
                z-index: 98;
                
                line-height: 3.5rem;
                
                flex: 1 1 0%;
                
            }
            
            .topnav {
                overflow: hidden;
                /* position: relative;
                top: -50px; */
                padding-left: 1rem;
                padding-right: 1rem;
            
                max-width: 730px;
                margin: 0 auto;
                
                display: flex;
                /*justify-content: space-between;*/
                justify-content: center;
                align-items: center;
                
                vertical-align: middle;
            }
            
            /* Style the links inside the navigation bar */
            .topnav a {
                color: rgb(38, 39, 48);
                text-align: center;
                text-decoration: none;
                /* font-size: 17px; */
            }
            
            /* Change the color of links on hover */
            .topnav a:hover {
                color: #e24768;
            }
            
            /* Add a color to the active/current link */
            .topnav a.active {
                color: #e24768;
            }
            
            /*.topnav-right a {
                margin-left: 3rem;
            }*/
            
            .topnav-right {
                display: none;
            }
            
            @media screen and (max-width: 800px) {
                .topnav-right {
                    display: none;
                }
                
                .topnav {
                    justify-content: center;
                }
            }
            
            .topnav-title {
                margin-left: 1rem;
                font-weight: 500;
            }
        </style>
        
        <div class="topnav-container">
            <nav class="topnav">
                <div class="topnav-left">
                    <a href="https://share.streamlit.io/jrieke/st-frontpage/main">
                        <img src="https://streamlit.io/images/brand/streamlit-mark-color.png" width=35>
                        <span class="topnav-title">View all apps</span>
                    </a>
                </div>
                <div class="topnav-right">
                    <a href="https://share.streamlit.io/jrieke/st-frontpage/main">View all apps</a>
                    <a href="https://share.streamlit.io/" target="_blank"><img src="https://screenshots.imgix.net/mui-org/material-ui-icons/account-circle-outlined/~v=3.9.2/e6ffca0e-87fa-4e5b-92ca-05c6079b5f9e.png?ixlib=js-1.2.0&s=c0f87e872aac058178a34a41422a425d" width=35 style="border-radius: 100%; margin-left: 1rem;"></a>
                </div>
            </nav>
        </div>
        """,
        unsafe_allow_html=True,
    )

############### Sidebar
# Add CSS to hide the sidebar initially and set custom background color
hide_sidebar_css = """
<style>
    /* Hide the sidebar initially */
    .css-1lcbmhc {
        display: none;
    }
    .css-18e3th9 {
        left: 0;
    }
    .css-1d391kg {
        left: 0;
    }
    /* Show toggle button */
    .sidebar-toggle {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 1;
        background-color: #32A1B0;
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    /* Custom sidebar styles */
    .css-1lcbmhc {
        background-color: #32A1B0; /* Custom background color */
        padding-top: 10px;
    }
    /* Custom header text color */
    .css-1lcbmhc h1 h2 h3 h4 {
        color: #FF414C; /* Custom text color */
</style>
"""
st.markdown(hide_sidebar_css, unsafe_allow_html=True)

# Add JavaScript to toggle the sidebar visibility
toggle_sidebar_js = """
<script>
    function toggleSidebar() {
        var sidebar = document.querySelector('.css-1lcbmhc');
        if (sidebar.style.display === 'none') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    }
</script>
"""
st.markdown(toggle_sidebar_js, unsafe_allow_html=True)

# Add a button to toggle the sidebar
st.markdown('<button class="sidebar-toggle" onclick="toggleSidebar()">Toggle Sidebar</button>', unsafe_allow_html=True)

# Sidebar content
with st.sidebar:
    st.sidebar.header("AI4DeSci Dashboard")
    st.sidebar.button("[Collaboration Hub](%s)" % "https://hub.ai4desci.com" )
    st.sidebar.button("[Public Collaborative Journal Note [pass: akashathon2024]](%s)" % "https://notes.ai4desci.com/" )
    st.sidebar.button("[Learn More About AI4DeSci]](%s)" % "https://ai4desci.com/" )
################# Sidebar

col1, col2, col3 = st.columns([1,1,1])
with col2:
    st.image("images/AI4DeSci_Logo_transparent.png", width=500)
st.title("AI4DeSci Science Crowdsourcing App Gallery")

st.markdown(
    """
    <style>
        .screenshot {
            border: 1px solid rgba(38, 39, 48, 0.2);
            border-radius: 0.25rem;
        }
        
        h3 {
            padding-top: 1rem;
        }
        
        h1, h2, h3, h4, h5, h6 {
            color: black !important;
            text-decoration: none;
        }
        
        small a {
            color: #32A1B0 !important;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: none;
        }
        /* Change the background color of the main content area */
        .stApp {
            background-color: #FBEED4;
        }
        
        /* Change the background color of the sidebar */
        .css-1lcbmhc {
            background-color: #32A1B0;
        }
    </style>
    
    <!-- Open links in new tabs by default. Required for Streamlit sharing to not open links within the iframe. -->
    <base target="_blank">
    """,
    unsafe_allow_html=True,
)

banner_html = """
<style>
    .banner {
        width: 100%;
        background-color: #FF414C;  /* Light grey background */
        color: white;  /* Text color */
        padding: 10px 0;  /* Padding around text and logo */
        display: flex;  /* Use flexbox for alignment */
        align-items: center;  /* Center items vertically */
        justify-content: center;  /* Center items horizontally */
        font-size: 24px;  /* Increased font size */
    }
</style>
<div class="banner">
    <span>This app is part of AI4DeSci Use-Case for Akashathon [17 April - 17 May 2024]</span>
</div>
"""

# Inject the HTML and CSS
st.markdown(banner_html, unsafe_allow_html=True)

category_colors_cycle = itertools.cycle(
    [
        # ui.color("red-70"),
        ui.color("orange-70"),
        ui.color("light-blue-70"),
        ui.color("blue-green-70"),
        ui.color("blue-70"),
        ui.color("violet-70"),
        ui.color("red-70"),
        ui.color("green-70"),
    ]
)


def category(name, description=None):
    # if current_category_index != 0:
    # st.write("---")
    # st.write("")
    # pass
    # ui.colored_header(name, "rgba(38, 39, 48, 0.6)")
    ui.colored_header(name, next(category_colors_cycle), description)
    # st.header(name)
    st.write("")

    # current_category_index += 1

def app(name, description, image, link, repo_link):
    ui.linked_image(image, link)
    st.subheader(f"[{name}]({link})")
    st.caption(f'<span style="color: black;">{description}</span>', unsafe_allow_html=True)
    #st.caption(f"[{description}]({link})")
#     clone_code = "git clone {} ".format(repo_name)
#     st.code(clone_code, language="python")
#     repo_link = "https://github.com/streamlit/{0}/".format(repo_name)
    # st.write(f"Public Link [({link})](%s)" % link)
    # st.write(f"Raw Link [({repo_link})](%s)" % repo_link)
    public_link_html = f"""
    <a href="{link}" style="color: #FF414C;">Public Link : {link}</a>
    """
    raw_link_html = f"""
    <a href="{repo_link}" style="color: #FF414C;">Raw Link {repo_link} </a>
    """
    st.markdown(public_link_html, unsafe_allow_html=True)
    st.markdown(raw_link_html, unsafe_allow_html=True)
    st.write("")


category("⛏️ In-House Science CrowdSourcing Apps")
col1, col2, col3 = st.columns(3)
with col1:
    app(
        "#1 : Machine Vision on Plant",
        "AI-Powered Plant Growth Monitoring. User need to upload plant images and identify properties to help model learn better.",
        "images/ai4desci_miniapp_plant.png",
        "https://miniapp.ai4desci.com/",
        "1e2r3eo54tb0f57a13na5km04o.ingress.medc1.com",
    )
with col2:
    app(
        "#2 : Data Analysis and ML Fitting",
        "Explore data from a CSV by uploading the CSV and converting it into an interactive dataframe. Perform ML fitting to produce models.",
        "images/ai4desci_miniapp_data.png",
        "https://miniapp2.ai4desci.com",
        "1mguc2ndapflt63jh6pgpjq51s.ingress.hurricane.akash.pub",
    )
with col3:
    app(
        "#3 : Music Analysis and Labelling",
        "Analyze Music together with Human. Provide scientific insight to acoustic study.",
        "images/ai4desci_music.png",
        "https:/miniapp3.ai4desci.com/",
        "s5kbc8ffd58rj3js23fsl1m2s4.ingress.greendepin.cloud",
    )
    
category("⛳ Upcoming Apps Under Development (see and test at your own risk)")
col1, col2, col3 = st.columns(3)
with col1:
    app(
        "PhDBot Research [Test and Dev]",
        "Collaborate with your AI-Agent to label research Data.",
        "images/ai4desci_miniapp_data.png",
        "https://snowpark-python-loader.streamlit.app/",
        "https://github.com/mellymel-appdev4ever/snowloader2",
    )
with col2:
    app(
        "PhDBot Classroom [Under Development]",
        "Specialized and Personalized Teaching Protocol for PhDBot AI-Agent Development.",
        "images/phdbot_1a.png",
        "https://snowflake-labs-sfquickstart-data-cle-dcr-setup-assistant-bkx7gg.streamlit.app/",
        "mb26hveqn5acl3d2aqhfi94ok4.ingress.greendepin.cloud",
    )
with col3:
    app(
        "PhDBot University [Design Stage]",
        "Digital Space for PhDBot Teaching and Learning from Human",
        "images/phdbot_1a.png",
        "https://university.phdbot.cloud/",
        "not-there-yet",
    )

category("⛓️ External Apps hosted on AI4DeSci")
col1, col2, col3 = st.columns(3)
with col1:
    app(
        "Galaxy Zoo ",
        "The infamous Galaxy Zoo Science Crowdsourcing.",
        "images/ai4desci_galaxyzoo.png",
        "https://miniapp8.ai4desci.com/",
        "6sdnkjk2lhaib6lkf7vbgvg2hc.ingress.greendepin.cloud",
    )
with col2:
    app(
        "Label Studio Toolkits ",
        "We will Host various Label-Studio Based Science Crowdsourcing Toolkit for multi-modal data labelling.",
        "images/label_studio.png",
        "https://external2.ai4desci/",
        "not-there-yet",
    )
with col3:
    app(
        "Label Studio Toolkits ",
        "We will Host various Label-Studio Based Science Crowdsourcing Toolkit for multi-modal data labelling.",
        "images/label_studio.png",
        "https://labelstudio.ai4desci/",
        "not-there-yet",
    )


col1, col2, col3 = st.columns([1,1,1])
with col1:
    st.image("images/python_logo.png", width = 350)
with col2:
    st.image("images/streamlit_logo.png", width = 350)
with col3:
    st.image("images/label_studio_logo.png", width = 500)

st.header("🤩 Want more apps? File in a request for collabs. ")
gallery_link = "https://ai4desci.com/collaborations"
st.write("[Check out our app gallery!](%s)" % gallery_link)

st.header("🧪 Our Amazing Apps are 100% powered by Akash's Decentralized Cloud ")
akash_link = "https://akash.network"


col1, col2, col3 = st.columns([1,1,1])
with col2:
    st.write("[Check out Akash Network!](%s)" % akash_link)
    st.image("images/akash-red-t.png", width=500)
