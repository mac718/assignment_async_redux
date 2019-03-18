import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResultsPage from '../components/ResultsPage';
import serialize from 'form-serialize';
import {getInitialResults, showModal, hideModal} from '../actions';


class ResultsPageContainer extends Component {
  render() {
    const {results, onSubmit, isFetching, showModal, hideModal, modalShow} = this.props
    return <ResultsPage 
      results={results} 
      onSubmit={onSubmit} 
      isFetching={isFetching} 
      showModal={showModal} 
      hideModal={hideModal} 
      modalShow={modalShow} />
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
    isFetching: state.isFetching,
    modalShow: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: e => {
      console.log(e)
      e.preventDefault();
      let form = e.target
      let data = serialize(form, {hash: true})

      dispatch(getInitialResults(data.search))
      form.reset()
    },

    showModal: (item) => {
      dispatch(showModal(item));
    }, 

    hideModal: () => {
      dispatch(hideModal());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPageContainer)