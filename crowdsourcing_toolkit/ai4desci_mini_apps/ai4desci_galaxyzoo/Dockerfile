FROM python:3.10

WORKDIR /app

# Copy the requirements.txt file into our working directory /app
COPY requirements.txt ./

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the codebase into the image
COPY . .

EXPOSE 8508

HEALTHCHECK CMD curl --fail http://localhost:8508/_stcore/health

ENTRYPOINT ["python", "-m", "streamlit", "run", "ai4desci_galaxyzoo.py", "--server.port=8508"]
