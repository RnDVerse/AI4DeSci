import streamlit as st
import os
import librosa
import librosa.display
import matplotlib.pyplot as plt
import numpy as np

st.set_page_config(
    page_title="AI4DeSci Mini-App #3 :Music Analysis and Visualization",
    page_icon="images/AI4DeSci_icon.png",
    layout='wide'
)

col1, col2, col3 = st.columns([1,1,1])
with col2:
    st.image("images/AI4DeSci_Logo_transparent.png", width=500)
st.title("AI4DeSci Mini-App for Music Analysis and Visualization")

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
st.markdown("# Music Analysis")
st.sidebar.header("Music Analysis")

st.write(
    """Here you can pick or upload your own music data on the sidebar. Default music file will be uploaded at first launch."""
)

st.write(
    """Based on the given music file basic analysis of Waveform and Spectrogram will be provided. """
)

st.write(
    """For the frequency analysis we define the following Low Range Frequency (20 - 250 Hz),
      Mid Range Frequency (251 - 2,500 Hz), and High Range Frequency (2,001 - 10,000 Hz). """
)


# List of available music files
music_files = [
    'Mort Garson - Mother Earth_s Plantasia - 01 Plantasia.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 02 Symphony for a Spider Plant.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 03 Baby_s Tears Blues.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 04 Ode to an African Violet.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 05 Concerto for Philodendron and Pothos.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 06 Rhapsody in Green.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 07 Swingin_ Spathiphyllums.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 08 You Don_t Have to Walk a Begonia.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 09 A Mellow Mood for Maidenhair.mp3',
    'Mort Garson - Mother Earth_s Plantasia - 10 Music to Soothe the Savage Snake Plant.mp3'
]


# Dropdown to select a music file
selected_file = st.sidebar.selectbox("Select a music file for analysis", music_files)

# Option to upload .mp3 file
uploaded_file = st.sidebar.file_uploader("Or upload your MP3 file", type=["mp3"])


data_file_path = os.path.join('data/music_file')

# Path for the selected or uploaded file
if uploaded_file is not None:
    audio_path = uploaded_file.name
    with open(audio_path, 'wb') as f:
        f.write(uploaded_file.getbuffer())  # Save file to disk for librosa
else:
    audio_path = os.path.join(data_file_path, selected_file)
    st.write(f"Using sample file: {selected_file}")

# Load audio file
y, sr = librosa.load(audio_path)

# Play music component
st.markdown("## Play Selected Music")
if uploaded_file is not None:
    audio_bytes = uploaded_file.read()
else:
    with open(audio_path, 'rb') as f:
        audio_bytes = f.read()
st.audio(audio_bytes, format='audio/mp3')


# Display waveform
fig, ax = plt.subplots()
librosa.display.waveshow(y, sr=sr, ax=ax, color='purple')
ax.set_title('Waveform')
st.pyplot(fig)

# Beat tracking
tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
beat_times = librosa.frames_to_time(beats, sr=sr)

# Calculate intervals between beats and statistics
beat_intervals = np.diff(beat_times)
interval_mean = np.mean(beat_intervals)
interval_std = np.std(beat_intervals)

# Display tempo and beat interval statistics
st.write(f"Estimated Tempo: {tempo} beats per minute (bpm)")
st.write(f"Average Beat Interval: {interval_mean:.2f} seconds, Std Dev: {interval_std:.2f} seconds")


# Spectral Analysis # Perform STFT
S = np.abs(librosa.stft(y))
S_dB = librosa.amplitude_to_db(S, ref=np.max)
fig, ax = plt.subplots()
img = librosa.display.specshow(S_dB, y_axis='log', x_axis='time', ax=ax)
ax.set_title('Spectrogram')
fig.colorbar(img, ax=ax, format="%+2.0f dB")
st.pyplot(fig)

# Spectrogram analysis
spectral_mean = np.mean(S_dB)
spectral_std = np.std(S_dB)
st.write(f"Mean of Spectral Magnitude (dB): {spectral_mean:.2f}")
st.write(f"Standard Deviation of Spectral Magnitude (dB): {spectral_std:.2f}")




# Get frequencies and match the length to that of S
freqs = librosa.fft_frequencies(sr=sr, n_fft=S.shape[0] * 2 - 2)  # This adjustment ensures consistency


# Define frequency ranges
low_freq_range = (freqs >= 20) & (freqs <= 250)
mid_freq_range = (freqs >= 250) & (freqs <= 2000)
high_freq_range = (freqs >= 2000) & (freqs <= 10000)

# Calculate statistics for each frequency range
low_freq_mean = np.mean(S_dB[low_freq_range, :], axis=0).mean()
mid_freq_mean = np.mean(S_dB[mid_freq_range, :], axis=0).mean()
high_freq_mean = np.mean(S_dB[high_freq_range, :], axis=0).mean()

low_freq_std = np.std(S_dB[low_freq_range, :], axis=0).mean()
mid_freq_std = np.std(S_dB[mid_freq_range, :], axis=0).mean()
high_freq_std = np.std(S_dB[high_freq_range, :], axis=0).mean()

# Display frequency range statistics
st.write(f"Low Frequency Mean (dB): {low_freq_mean:.2f}, Std Dev: {low_freq_std:.2f}")
st.write(f"Mid Frequency Mean (dB): {mid_freq_mean:.2f}, Std Dev: {mid_freq_std:.2f}")
st.write(f"High Frequency Mean (dB): {high_freq_mean:.2f}, Std Dev: {high_freq_std:.2f}")




st.header("🧪 Our Amazing Apps are 100% powered by Akash's Decentralized Cloud ")
akash_link = "https://akash.network"


col1, col2, col3 = st.columns([1,1,1])
with col2:
    st.write("[Check out Akash Network!](%s)" % akash_link)
    st.image("images/akash-red-t.png", width=500)
