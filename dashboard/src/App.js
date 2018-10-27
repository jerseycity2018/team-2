import React, { Component } from 'react';
import FavoritePlaces from './components/FavoritePlaces'
import TopHashtags from './components/TopHashtags'
import Issues from './components/Issues'
import Header from './components/Header'
import LiveFeed from './components/LiveFeed'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <LiveFeed />
        <Issues />
        <FavoritePlaces/>
        <TopHashtags/>
      </div>
    );
  }
}

export default App;
