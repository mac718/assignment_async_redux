import React from 'react';
import DetailsModalContainer from '../containers/DetailsModalContainer';

const ResultListItem = ({item, showModal}) => {
  return (
    <div className='ResultListItem'>
      <li className='list-group-item'>
        <a href='#' onClick={() => showModal(item)}><span><h5>Title:</h5>{JSON.stringify(item.best_book.title)}</span></a>
        <span><h5>Author:</h5>{JSON.stringify(item.best_book.author.name)}</span>
      </li>
    </div>
  )
}

export default ResultListItem;

//need to access item in PageResultsContainer - cannot pass that data from here