import streamlit as st
import pandas as pd
import os

from pages.utilities.research import get_arxiv
from pages.utilities.client import get_mistral_query_engine, get_gpt_query_engine

if __name__ == "__main__":
  
    st.set_page_config(layout="wide")

    st.title('Research Assistant')
    st.divider()
    
    with st.sidebar:
    
        max_documents = st.number_input("Max number of documents:", value=10)
    
    topic = st.text_input('Research Topic:')
    
    with st.spinner('Thinking...'):

        if len(topic) > 0:                            
            get_arxiv(topic, max_documents)
            
        if os.path.exists('documents.csv'):
            df = pd.read_csv("documents.csv")
            df = df.drop_duplicates(subset=['title'])
            st.dataframe(df)
            
        if topic:
            try:
                query_engine = get_mistral_query_engine(True)
                query_engine = get_gpt_query_engine(True)
            except:
                pass
