import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div style={headerContainer}>
      <div style={headerStyle}>

        <img style={{height: 70}} src="https://cdnfiles.crowdrise.com/Prod_Large/CPC-Logo-HiRes_1-4db89a250b22e.jpg?5bd3f0015e3e9"/>
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
      <div style={visitorStyle}>
        <h4>Estimated Visitor Today: {this.props.visitors}</h4>
        <h4>Coming As Group: {this.props.groups}</h4>
      </div>
      </div>

    );
  }
}
const headerContainer={

}
const visitorStyle={
  "max-width": 500,
  "justify-content": 'space-between',
  "flex-direction": 'row',
  "display": 'flex'
}
const headerStyle= {
  "display": 'flex',
  "flex-direction": 'row',
  "justify-content": 'space-between',
  "border-color": 'rgba(34, 34, 34, 0.05)',
  "background-color": 'white',
  "font-weight": 200,
  "letter-spacing": '1px'
}
export default Header;
