FROM python:3.9

WORKDIR /app

# Copy the requirements.txt file into our working directory /app
COPY requirements.txt ./

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the codebase into the image
COPY . .

EXPOSE 8501

HEALTHCHECK CMD curl --fail http://localhost:8501/_stcore/health

ENTRYPOINT ["python", "-m", "streamlit", "run", "ai4desci_plant.py", "--server.port=8501"]
