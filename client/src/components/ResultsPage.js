import React from 'react';
import SearchForm from './SearchForm';
import ResultListItem from './ResultListItem';

const ResultsPage = ({results, onSubmit, isFetching, showModal}) => {
  const resultsList = results.map(work => {
    return <ResultListItem item={work} showModal={showModal}/>
  })

  return (
    <div className="ResultsPage">
      <SearchForm onSubmit={onSubmit} />
      <div className="ResultsList">
        {isFetching ? <p>loading...</p> : resultsList}
      </div>
    </div>
  )
} 

export default ResultsPage;