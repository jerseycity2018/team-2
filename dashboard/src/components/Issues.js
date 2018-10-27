import React, { Component } from 'react';
import Select from 'react';

const sectionStyle = {

  'padding-top': '50px',
  'padding-bottom': '50px',
  "text-align": 'center'
};

class Issues extends Component {



  render() {
    return (
      <section class="features" id="features" className="App" style={sectionStyle}>
      <div class="container">

        <div class="row section-heading text-center">
          <h2>Categories</h2>
          <select>
            <option value="garbege">Garbege</option>
            <option value="noise">Noise</option>
            <option value="misuse">Inappropriate Usage</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div class="row my-auto">

          <div class="col-lg-4">
            <div class="feature-item">
              <p class="text-muted">This will be complain msg1</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="feature-item">
              <p class="text-muted">This will be complain msg2</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="feature-item">
              <p class="text-muted">This will be complain msg3</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
  }
}

export default Issues;
