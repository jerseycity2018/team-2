import React, { Component } from 'react';
import Select from 'react';
class Issues extends Component {


  render() {
    return (
      <div className="App">
        <p>Catagories: </p>
        <select>
          <option value="garbege">Garbege</option>
          <option value="noise">Noise</option>
          <option value="misuse">Inappropriate Usage</option>
          <option value="others">Others</option>
        </select>
      </div>
    );
  }
}

export default Issues;
