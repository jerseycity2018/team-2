import React, { Component } from 'react';
import '../topPlaces.css';
class TopHashtags extends Component {
  render(){

    return (
      <div className="App">
        <h4>Top HashTags: </h4>
        <ul style={{"list-style-type": "none"}}>
        {Object.keys(this.props.hashtags).map(hashtag => <li>#{hashtag}</li>)}
        </ul>
      </div>
    );
  }
}

export default TopHashtags;
