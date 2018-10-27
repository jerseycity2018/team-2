import React, { Component } from 'react';
import '../topPlaces.css';
class TopHashtags extends Component {
  render(){

    return (
      <div className="App" style={{"margin-right": 100}}>
        <h4>Top HashTags: </h4>
        <ul style={{"list-style-type": "none"}}>
          {Object.keys(this.props.hashtags).sort((a,b)=>{return this.props.hashtags[b]-this.props.hashtags[a]}).map(hashtag => <li>#{hashtag}</li>)}
        </ul>
      </div>
    );
  }
}

export default TopHashtags;
