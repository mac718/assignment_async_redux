import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResultsPage from '../ResultsPage';
import serialize from 'form-serialize';
import {getResults} from '../actions';

class ResultsPageContainer extends Component {
  componentDidMount() {
    //let form = document.getElementById('SearchForm')
    
    //this.addEventListener('onSubmit', this.props.onSubmit)
    //this.props.onSubmit()
  }
  render() {
    const {results, onSubmit} = this.props
    return <ResultsPage results={results} onSubmit={onSubmit} />
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      console.log(e)
      e.preventDefault();
      let form = e.target
      let data = serialize(form, {hash: true})

      dispatch(getResults(data.search))
      form.reset()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPageContainer)