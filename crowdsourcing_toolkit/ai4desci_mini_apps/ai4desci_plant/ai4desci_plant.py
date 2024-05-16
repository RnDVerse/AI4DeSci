import streamlit as st
import numpy as np
import cv2
from PIL import Image
from io import BytesIO
import pandas as pd
import matplotlib.pyplot as plt


st.set_page_config(
    page_title="AI4DeSci Mini-App #1 : Machine Vision on Plant",
    page_icon="images/AI4DeSci_icon.png",
    layout='wide'
)

col1, col2, col3 = st.columns([1,1,1])
with col2:
    st.image("images/AI4DeSci_Logo_transparent.png", width=500)
st.title("AI4DeSci Mini-App for Machine Vision on Plant")


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


# Page title
st.markdown("# Estimate Canopy Coverage of a Plant")
st.sidebar.header("Estimate Canopy Coverage through pixels and then calibrate to cm^2")

st.write(
    """Upload an image of a series of images of plants with green colored canopy. The canopy coverage will be calculated based on existing pixel scaling. 
      Function for custom pixels adjustment is being worked on. You can improve the accuracy by first removing the background image."""
)

# Define maximum file size
MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB

# Helper function to convert and save image
def convert_image(img):
    buf = BytesIO()
    img.save(buf, format=img.format)
    byte_im = buf.getvalue()
    return byte_im

# Image processing function
def process_image(image):
    col1, col2 = st.columns(2)
    col1.write("Original Image :camera:")
    col1.image(image)

    # Convert image to array and then to HSV
    image_array = np.array(image.convert('RGB'))  # Ensure image is in RGB
    hsv_image = cv2.cvtColor(image_array, cv2.COLOR_RGB2HSV)

    # Define the range for green color in HSV and create a mask
    lower_green = np.array([35, 50, 50])
    upper_green = np.array([85, 255, 255])
    mask = cv2.inRange(hsv_image, lower_green, upper_green)

    # Convert mask back to an image for display
    mask_image = Image.fromarray(mask)
    processed_image = mask_image

    col2.write("Processed Image :wrench:")
    col2.image(processed_image, use_column_width=True)
    return processed_image, image_array  # Return both processed mask and original RGB array

# Function to calculate Canopy Coverage in pixels
def get_area_in_pixels(mask):
    # Calculate the Canopy Coverage pixels directly from the mask
    green_area_pixels = np.sum(mask == 255)
    return green_area_pixels

# Automatically analyze the default images at the beginning
default_images_paths = ["images/tree_1.jpg", "images/tree_2.jpg", "images/tree_3.jpg"]
canopy_areas = []
image_names = []

for image_path in default_images_paths:
    image = Image.open(image_path)
    processed_image, original_image = process_image(image)
    pixel_area = get_area_in_pixels(np.array(processed_image))
    scaling_factor = 4096  # obtained from calibration
    green_area_cm2 = pixel_area / scaling_factor
    canopy_areas.append(green_area_cm2)
    image_names.append(image_path.split('/')[-1])

    # Display the green area for each default image
    st.write(f"The Canopy Coverage for {image_path.split('/')[-1]} is {green_area_cm2} cm²")


# Uploading and handling multiple images
uploaded_files = st.sidebar.file_uploader("Upload images", type=["png", "jpg", "jpeg"], accept_multiple_files=True)

if uploaded_files:
    for uploaded_file in uploaded_files:
        if uploaded_file.size > MAX_FILE_SIZE:
            st.error(f"The file {uploaded_file.name} is too large. Please upload an image smaller than 5MB.")
        else:
            # Process each image and display
            image = Image.open(uploaded_file)
            processed_image, original_image = process_image(image)
            pixel_area = get_area_in_pixels(np.array(processed_image))
            scaling_factor = 4096  # obtained from calibration
            green_area_cm2 = pixel_area / scaling_factor
            canopy_areas.append(green_area_cm2)
            image_names.append(uploaded_file.name)

            # Display the green area for each image
            st.write(f"The Canopy Coverage for {uploaded_file.name} is {green_area_cm2} cm²")
else:
    st.warning("Please upload an image or images to continue.")

# If there are results, display them in a table and plot
if canopy_areas:
    # Create a DataFrame for displaying results in a table
    results_df = pd.DataFrame({
        "Image Name": image_names,
        "Canopy Coverage (cm²)": canopy_areas
    })
    
    # Display the DataFrame as a table
    st.write("### Canopy Coverage Results", results_df)
    
    # Plot the results
    fig, ax = plt.subplots()
    ax.bar(image_names, canopy_areas, color='green')
    ax.set_xlabel('Image Name')
    ax.set_ylabel('Canopy Coverage (cm²)')
    ax.set_title('Canopy Coverage of Plants')
    ax.set_xticklabels(image_names, rotation=45, ha='right')
    plt.tight_layout()
    st.pyplot(fig)

# Button to rerun the app (triggers a rerun of the script)
st.button("Re-run")

st.header("🧪 Our Amazing Apps are 100% powered by Akash's Decentralized Cloud ")
akash_link = "https://akash.network"


col1, col2, col3 = st.columns([1,1,1])
with col2:
    st.write("[Check out Akash Network!](%s)" % akash_link)
    st.image("images/akash-red-t.png", width=500)
