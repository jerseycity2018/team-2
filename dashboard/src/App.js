import React, { Component } from 'react';
import FavoritePlaces from './components/FavoritePlaces'
import TopHashtags from './components/TopHashtags'
import Issues from './components/Issues'
import Header from './components/Header'
import LiveFeed from './components/LiveFeed'
import firebase from 'firebase'
class App extends Component {
componentWillMount(){
  var config = {
    apiKey: "AIzaSyDJ_3plHwyFSqoKrL0VeqOAY8CeVaF27nE",
    authDomain: "cpca-9d697.firebaseapp.com",
    databaseURL: "https://cpca-9d697.firebaseio.com",
    projectId: "cpca-9d697",
    storageBucket: "cpca-9d697.appspot.com",
    messagingSenderId: "1037412277078"
  };
  firebase.initializeApp(config);
}
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
