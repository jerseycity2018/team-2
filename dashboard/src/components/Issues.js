import React, { Component } from 'react';
import Select from 'react';
import firebase from 'firebase'


let msgBox=(msg)=>
  <div style={{"flex":'1'}}>
    <div style={msgPadding}>
      <p>{msg}</p>
    </div>
  </div>
;

class Issues extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'Garbage', complaints:{Garbage:[]} };
    this.handleChange = this.handleChange.bind(this);

  }
  componentDidMount() {
    firebase.database().ref("Complaints").on("value", (snapshot)=>{
      this.setState({complaints:snapshot.val()})
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <section className="App" style={sectionStyle}>
      <div>

        <div>
          <h2>Categories</h2>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Garbage">Garbage</option>
            <option value="noise">Noise</option>
            <option value="misuse">Inappropriate Usage</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div style={msgStyle}>
          {Object.keys(this.state.complaints[this.state.value]).map(complaint=>{return (msgBox(this.state.complaints[this.state.value][complaint]))})}
        </div>
        <div style={msgStyle}>

        </div>
      </div>
    </section>
    );

  }
}

const sectionStyle = {
  "padding-top": '50px',
  "padding-bottom": '50px',
  "text-align": 'center'
};

const msgStyle = {
  "flex-direction": 'row',
  "display":"flex",
}

const msgPadding = {
  "padding": '5px 10px'
}

export default Issues;
