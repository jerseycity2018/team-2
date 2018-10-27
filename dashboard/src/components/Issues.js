import React, { Component } from 'react';
import Select from 'react';

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


class Issues extends Component {



  render() {
    return (
      <section className="App" style={sectionStyle}>
      <div>

        <div>
          <h2>Categories</h2>
          <select>
            <option value="garbege">Garbege</option>
            <option value="noise">Noise</option>
            <option value="misuse">Inappropriate Usage</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div style={msgStyle}>

          <div style={{"flex":'1'}}>
            <div style={msgPadding}>
              <p>This will be complain msg1</p>
            </div>
          </div>

          <div style={{"flex":'1'}}>
            <div style={msgPadding}>
              <p>This will be complain msg2</p>
            </div>
          </div>

          <div style={{"flex":'1'}}>
            <div style={msgPadding}>
              <p>This will be complain msg3</p>
            </div>
          </div>

          <div style={{"flex":'1'}}>
            <div style={msgPadding}>
              <p>This will be complain msg4</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
  }
}

export default Issues;
