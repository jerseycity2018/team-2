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
  componentDidMount(){
    fetch("https://cryptic-savannah-95295.herokuapp.com/tweets/201810260000",{
      headers: {
        "Content-Type":"application/json; charset=UTF-8"
      }
    }).then((res)=>{
      return res.json()
    }).then((json)=>{
        this.setState({all: json.all, hashtags: json.hashtags, num_tweets: json.num_tweets, num_mentions: json.num_mentions})
    })
  }
  state = {
    all:[],
    hashtags:{},
    num_tweets:0,
    num_mentions:0
  }
  render() {
    return (
      <div style={divStyle}>
        <Header visitors={this.state.num_tweets} groups={this.state.num_mentions} />
        <div style={firstRow}>
          <TopHashtags hashtags={this.state.hashtags}/>
          <Issues />
        </div>
        <LiveFeed />
        <FavoritePlaces/>
      </div>
    );
  }
}

const firstRow={
  "flex-direction": 'row',
  "display": 'flex',
  "justify-content": 'space-between'
}
const divStyle={
  "margin": 20
}
export default App;
