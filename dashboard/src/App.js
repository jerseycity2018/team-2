import React, { Component } from 'react';
import VisitorNumber from './components/VisitorNumber'
import Issues from './components/Issues'

class App extends Component {

  render() {
    return (
      <div className="App">
        <VisitorNumber/>
        <Issues/>
      </div>
    );
  }
}

export default App;
