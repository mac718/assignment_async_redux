import React from 'react';

const DetailsModal = ({book, id, reviews, onClick, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} id={id}>
      <div className='book-reviews modal-main'>
      <img src={book.image_url} />
        {reviews}
      <button onClick={onClick}>close</button>
      </div>
    </div>
  )
}

export default DetailsModal;