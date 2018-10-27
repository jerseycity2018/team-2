import React, { Component } from 'react';
import FavoritePlaces from './components/FavoritePlaces'
import TopHashtags from './components/TopHashtags'
class App extends Component {

  render() {
    return (
      <div className="App">
        <FavoritePlaces/>
        <TopHashtags/>
      </div>
    );
  }
}

export default App;
