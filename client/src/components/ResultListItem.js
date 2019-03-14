import React from 'react';

const ResultListItem = ({item}) => {
  return (
    <li className='list-group-item'>
      <span><h5>Title:</h5>{JSON.stringify(item.best_book.title)}</span>
      <span><h5>Author:</h5>{JSON.stringify(item.best_book.author.name)}</span>
    </li>
  )
}

export default ResultListItem;