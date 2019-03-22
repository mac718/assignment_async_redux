import React, {Component} from 'react'
import {connect} from 'react-redux';
import DetailsModal from '../components/DetailsModal';
import {hideModal} from '../actions';

class DetailsModalContainer extends Component {
  render() {
    const {book, id, reviews, show, onClick, isFetchingReviews} = this.props;
    console.log(reviews)
    return (
      <DetailsModal 
        book={book} id={id}  
        reviews={reviews} 
        show={show} 
        onClick={onClick}  
        isFetchingReviews={isFetchingReviews} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.currentItem,
    id: ownProps.id,
    show: state.modalShow,
    reviews: state.currentReviews,
    isFetchingReviews: state.isFetchingReviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(hideModal());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsModalContainer);