import React, { Component } from 'react';
import './App.css';
import ResultsPageContainer from './containers/ResultsPageContainer';
import DetailsModalContainer from './containers/DetailsModalContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResultsPageContainer />
        <DetailsModalContainer />
      </div>
    );
  }
}

export default App;
