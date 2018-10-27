import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div style={{ margin: 40, display: "flex", "flex-direction": "row", "justify-content": "space-between" }}>
        <img style={{width: 250}} src="https://cdnfiles.crowdrise.com/Prod_Large/CPC-Logo-HiRes_1-4db89a250b22e.jpg?5bd3f0015e3e9"/>
        <div style={{"flex-direction": "column", display: "flex", "align-items": "flex-start"}}>
          <h4 style={{"margin": 12}}>Select a day:</h4>
          <select>
            <option>Sat Oct 27 2018</option>
            <option>Sat Oct 26 2018</option>
            <option>Sat Oct 25 2018</option>
            <option>Sat Oct 24 2018</option>
            <option>Sat Oct 23 2018</option>
            <option>Sat Oct 22 2018</option>
            <option>Sat Oct 21 2018</option>
            <option>Sat Oct 20 2018</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Header;
