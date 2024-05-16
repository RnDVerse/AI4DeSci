import streamlit as st

from pages.utilities.client import get_mistral_query_engine, get_gpt_query_engine

if 'message_list' not in st.session_state:
  st.session_state.message_list = []    
    
if __name__ == "__main__":

    st.title('Research Assistant')
    st.divider()
    
    with st.sidebar:
      
      st.markdown('# Models')
      
      selected_model = st.selectbox('s', ['Mistral', 'GPT-4'], label_visibility='hidden')

    message = st.chat_message("assistant")
    message.write("Hello human!")
    
    prompt = st.chat_input("Ask a question")
    
    try:
      if selected_model == 'Mistral':
        query_engine = get_mistral_query_engine(False)
      else:
        query_engine = get_gpt_query_engine(False)
    except:
        with st.chat_message("assistant"):
          st.write(str("Error loading model. Please try again."))
          st.stop()
        
    for l in st.session_state.message_list:
                
      if 'user' in l:
        with st.chat_message("user"):
          st.write(l['user'])
      if 'assistant' in l:
        with st.chat_message("assistant"):
          st.write(l['assistant'])
        
    if prompt:
            
      with st.spinner('Thinking...'):

        response = query_engine.query(prompt)
                
        with st.chat_message("user"):
          st.write(prompt)
        with st.chat_message("assistant"):
          st.write(str(response))

        a = {
          "user": prompt,
          "assistant": str(response)         
        }
            
        st.session_state.message_list.append(a)
                                    

          

          
          
