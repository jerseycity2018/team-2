import React, { Component } from 'react';
import Select from 'react';
class LiveFeed extends Component {


  render() {
    return (
      <section className="App" style={sectionStyle}>
      <div>
        <h4>Top Places: </h4>
        <div style={msgStyle}>

        </div>
        <div style={msgStyle}>

        </div>
      </div>
      </section>
    );
  }
}

const rowStyle={
  "flex-direction": 'row',
  "display": 'flex',
  "align-items": 'center'
}
const sectionStyle = {
  "padding-left": '50px',
  "padding-right": '50px',
  "min-width": 700
};

const msgStyle = {
  "flex-direction": 'row',
  "display":'flex',
}

const msgBoxStyle = {
  "position": 'relative',
  "width": '250px',
  "height": '250px',
  "boxSizing": 'border-box',
  "border": '5px solid #FFAB91',
  "border-radius": '20px',
  "text-align": 'left',
  "padding": '5px 10px'
}


export default LiveFeed;
