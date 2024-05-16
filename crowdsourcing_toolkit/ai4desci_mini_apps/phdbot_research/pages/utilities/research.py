import pandas as pd
import arxiv
import os

'''
Get papers from arxiv using the arxiv API
'''
def get_arxiv(query, num_documents):
  
  search = arxiv.Search(
    query = query,
    max_results = num_documents,
    sort_by = arxiv.SortCriterion.Relevance,
    sort_order = arxiv.SortOrder.Descending
  )    
  
  titles = []
  summaries = []
  authors = []
  published = []
  links = []
  for result in search.results():
    
    titles.append(result.title)
    summaries.append(result.summary)
    authors.append(', '.join(author.name for author in result.authors))
    published.append(result.published)
    links.append(', '.join(str(link) for link in result.links))
    
    result.download_pdf(dirpath="./documents")
    
  df = pd.DataFrame({'title': titles, 'summary': summaries, 'authors': authors, 'published': published, 'links': links})
  
  df = df.sort_values(by='published', ascending = False)
  
  df = df.reset_index(drop=True)

  if os.path.exists('documents.csv'):
    df.to_csv('documents.csv', mode='a', header=False, index=False)
  else:
    df.to_csv('documents.csv', index=False)
    
  return df
  
