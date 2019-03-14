import React from 'react';
import SearchForm from './SearchForm';
import ResultListItem from './ResultListItem';

const ResultsPage = ({results, onSubmit}) => {
  const resultsList = results.map(work => {
    return <ResultListItem item={work} />
  })

  return (
    <div className="ResultsPage">
      <SearchForm onSubmit={onSubmit} />
      <div className="ResultsList">
        {resultsList}
      </div>
    </div>
  )
} 

export default ResultsPage;