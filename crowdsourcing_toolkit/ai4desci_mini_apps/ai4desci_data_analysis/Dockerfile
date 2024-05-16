FROM python:3.9

WORKDIR /app

# Copy the requirements.txt file into our working directory /app
COPY requirements.txt ./

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the codebase into the image
COPY . .

EXPOSE 8502

HEALTHCHECK CMD curl --fail http://localhost:8502/_stcore/health

ENTRYPOINT ["python", "-m", "streamlit", "run", "ai4desci_data_analysis.py", "--server.port=8502"]
