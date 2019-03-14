import React from 'react';
import SearchForm from './SearchForm';

const ResultsPage = ({results, onSubmit}) => {
  console.log(results)

  return (
    <div className="ResultsPage">
      <SearchForm onSubmit={onSubmit} />
      <div className="ResultsList">
        {JSON.stringify(results)}
      </div>
    </div>
  )
} 

export default ResultsPage;