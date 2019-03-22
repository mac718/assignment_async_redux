import React from 'react';

function createMarkup(markup) {
  return {__html: markup}
} 

const DetailsModal = ({book, id, reviews, onClick, show, isFetchingReviews}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} id={id}>
      <div className='book-reviews modal-main'>
      <img src={book.image_url} />
        {isFetchingReviews ? <p>loading...</p> : 
          <div id='reviews-content' dangerouslySetInnerHTML={createMarkup(reviews)} />}
      <button onClick={onClick}>close</button>
      </div>
    </div>
  )
}

export default DetailsModal;