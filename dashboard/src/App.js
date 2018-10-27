import React, { Component } from 'react';
import VisitorNumber from './components/VisitorNumber'
import Issues from './components/Issues'


class App extends Component {

  render() {
    return (
      <div class='container'>
        <div className="App" class="col">
          <VisitorNumber/>
        </div>

        <div class="col">
          <Issues/>
        </div>
      </div>
    );
  }
}

export default App;
