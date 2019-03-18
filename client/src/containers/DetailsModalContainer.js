import React, {Component} from 'react'
import {connect} from 'react-redux';
import DetailsModal from '../components/DetailsModal';
import {getReviews} from '../actions';
import {hideModal} from '../actions';

class DetailsModalContainer extends Component {
  render() {
    const {book, id, reviews, show, onClick} = this.props;
    return (
      <DetailsModal book={book} id={id} reviews={reviews()} show={show} onClick={onClick}  />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.currentItem,
    id: ownProps.id,
    show: state.modalShow
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reviews: () => {
      //dispatch(getReviews(ownProps.id))
    },
    onClick: () => {
      dispatch(hideModal());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsModalContainer);