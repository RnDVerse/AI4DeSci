import streamlit as st
import os
import base64

ST_COLOR_PALETTE = {
    "red": {
        "100": "#7d353b",
        "90": "#bd4043",
        "80": "#ff2b2b",
        "70": "#ff4b4b",
        "60": "#ff6c6c",
        "50": "#ff8c8c",
        "40": "#ffabab",
        "30": "#ffc7c7",
        "20": "#ffdede",
        "10": "#fff0f0",
    },
    "orange": {
        "100": "#d95a00",
        "90": "#ed6f13",
        "80": "#ff8700",
        "70": "#ffa421",
        "60": "#ffbd45",
        "50": "#ffd16a",
        "40": "#ffe08e",
        "30": "#ffecb0",
        "20": "#fff6d0",
        "10": "#fffae8",
    },
    "yellow": {
        "100": "#dea816",
        "90": "#edbb16",
        "80": "#faca2b",
        "70": "#ffe312",
        "60": "#fff835",
        "50": "#ffff59",
        "40": "#ffff7d",
        "30": "#ffffa0",
        "20": "#ffffc2",
        "10": "#ffffe1",
    },
    "green": {
        "100": "#177233",
        "90": "#158237",
        "80": "#09ab3b",
        "70": "#21c354",
        "60": "#3dd56d",
        "50": "#5ce488",
        "40": "#7defa1",
        "30": "#9ef6bb",
        "20": "#c0fcd3",
        "10": "#dffde9",
    },
    "blue-green": {
        "100": "#246e69",
        "90": "#2c867c",
        "80": "#29b09d",
        "70": "#00d4b1",
        "60": "#20e7c5",
        "50": "#45f4d5",
        "40": "#6bfde3",
        "30": "#93ffee",
        "20": "#bafff7",
        "10": "#dcfffb",
    },
    "light-blue": {
        "100": "#15799e",
        "90": "#0d8cb5",
        "80": "#00a4d4",
        "70": "#00c0f2",
        "60": "#24d4ff",
        "50": "#4be4ff",
        "40": "#73efff",
        "30": "#9af8ff",
        "20": "#bffdff",
        "10": "#e0feff",
    },
    "blue": {
        "100": "#004280",
        "90": "#0054a3",
        "80": "#0068c9",
        "70": "#1c83e1",
        "60": "#3d9df3",
        "50": "#60b4ff",
        "40": "#83c9ff",
        "30": "#a6dcff",
        "20": "#c7ebff",
        "10": "#e4f5ff",
    },
    "violet": {
        "100": "#3f3163",
        "90": "#583f84",
        "80": "#6d3fc0",
        "70": "#803df5",
        "60": "#9a5dff",
        "50": "#b27eff",
        "40": "#c89dff",
        "30": "#dbbbff",
        "20": "#ebd6ff",
        "10": "#f5ebff",
    },
    "gray": {
        "100": "#0e1117",
        "90": "#262730",
        "80": "#555867",
        "70": "#808495",
        "60": "#a3a8b8",
        "50": "#bfc5d3",
        "40": "#d5dae5",
        "30": "#e6eaf1",
        "20": "#f0f2f6",
        "10": "#fafafa",
    },
    "khaki":{
       "100": "#FBEED4",
       "90": "#FBEED4",
       "80": "#FBEED4",
       "70": "#FBEED4",
       "60": "#FBEED4",
       "50": "#FBEED4",
       "40": "#FBEED4",
       "30": "#FBEED4",
       "20": "#FBEED4",
       "10": "#FBEED4",
    },
    "turq":{
       "100": "#32A1B0",
       "90": "#32A1B0",
       "80": "#32A1B0",
       "70": "#32A1B0",
       "60": "#32A1B0",
       "50": "#32A1B0",
       "40": "#32A1B0",
       "30": "#32A1B0",
       "20": "#32A1B0",
       "10": "#32A1B0",
    },
    "akash":{
       "100": "#FF414C",
       "90": "#FF414C",
       "80": "#FF414C",
       "70": "#FF414C",
       "60": "#FF414C",
       "50": "#FF414C",
       "40": "#FF414C",
       "30": "#FF414C",
       "20": "#FF414C",
       "10": "#FF414C",
    },
}


def local_css(file_name: str) -> None:
    """Loads a local .css file into streamlit."""
    with open(file_name) as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)


def color(name):
    """Returns a color from the streamlit color palette, e.g. red-100, as hex."""
    hue, intensity = name.rsplit("-", 1)
    return ST_COLOR_PALETTE[hue][intensity]


def space(num_lines=1):
    for _ in range(num_lines):
        st.write("")


def colored_header(label, color=None, description=None):
    """Shows a header with a colored underline and an optional description."""
    st.header(label)
    st.write(
        f'<hr style="background-color: {color}; margin-top: 0; margin-bottom: 0; height: 3px; border: none; border-radius: 3px;">',
        unsafe_allow_html=True,
    )
    if description:
        st.caption(f'<span style="color: black;">{description}</span>', unsafe_allow_html=True)


# From: https://discuss.streamlit.io/t/href-on-image/9693/3
@st.cache_data()
def get_base64_of_bin_file(bin_file):
    with open(bin_file, "rb") as f:
        data = f.read()
    return base64.b64encode(data).decode()


@st.cache_data()
def get_img_with_href(local_img_path, target_url,width =500,height=500):
    img_format = os.path.splitext(local_img_path)[-1].replace(".", "")
    bin_str = get_base64_of_bin_file(local_img_path)
    html_code = f"""
        <a href="{target_url}">
            <img class="screenshot" src="data:image/{img_format};base64,{bin_str}" style="width: {width}px; height: {height}px;"/>
        </a>"""
    return html_code


def linked_image(image, target_url, width =500,height=500):
    """Shows an image with a link."""
    st.write(get_img_with_href(image, target_url, width, height), unsafe_allow_html=True)
