import streamlit as st
import os
import qdrant_client

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core import (
    VectorStoreIndex,
     load_index_from_storage,
    ServiceContext)
from llama_index.llms.ollama import Ollama

from llama_index.core.storage.storage_context import StorageContext
from llama_index.vector_stores.qdrant import QdrantVectorStore

@st.cache_resource
def get_mistral_query_engine(data_changed):
    llm_model = Ollama(model="mistral")
    
    collection_name = "storage"
    
    if 'qdrant_client' not in st.session_state:
      st.session_state.qdrant_client = qdrant_client.QdrantClient(path="./qdrant_data") 
      
    if 'vector_store' not in st.session_state:
      st.session_state.vector_store = QdrantVectorStore(client=st.session_state.qdrant_client, collection_name=collection_name)
      
    if 'service_context' not in st.session_state:
      st.session_state.service_context = ServiceContext.from_defaults(llm=llm_model, embed_model="local")
      
    if 'storage_context' not in st.session_state:
      st.session_state.storage_context = StorageContext.from_defaults(vector_store=st.session_state.vector_store)
      
      
    qdrant_persist_dir= "./qdrant_data/collection/storage"
    if not os.path.exists(qdrant_persist_dir) or data_changed:  
                      
      documents = SimpleDirectoryReader("documents").load_data()
      
      index = VectorStoreIndex.from_documents(documents,
                                              service_context=st.session_state.service_context,
                                              storage_context=st.session_state.storage_context)
      index.storage_context.persist()
      st.session_state.data_changed = False      
    else:
      index = VectorStoreIndex.from_vector_store(vector_store=st.session_state.vector_store, service_context=st.session_state.service_context)

    query_engine = index.as_query_engine(streaming=False)
    
    return query_engine

@st.cache_resource
def get_gpt_query_engine(data_changed):
  gpt_persist_dir = "./storage"
  if not os.path.exists(gpt_persist_dir) or data_changed:  
    documents = SimpleDirectoryReader("documents").load_data()
    index = VectorStoreIndex.from_documents(documents)
    index.storage_context.persist()
    st.session_state.data_changed = False
  else:
    storage_context = StorageContext.from_defaults(persist_dir=gpt_persist_dir)
    index = load_index_from_storage(storage_context)
    
  query_engine = index.as_query_engine() 
  
  return query_engine
