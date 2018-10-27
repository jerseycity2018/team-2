import React, { Component } from 'react';
import VisitorNumber from './components/VisitorNumber'
import Issues from './components/Issues'
import Header from './components/Header'
import LiveFeed from './components/LiveFeed'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <LiveFeed />
        <VisitorNumber />
        <Issues />
      </div>
    );
  }
}

export default App;
