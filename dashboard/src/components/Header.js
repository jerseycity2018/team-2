import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div style={headerContainer}>
        <div style={headerStyle}>

          <img style={{height: 70}} src="https://cdnfiles.crowdrise.com/Prod_Large/CPC-Logo-HiRes_1-4db89a250b22e.jpg?5bd3f0015e3e9"/>
          <div style={{"flex-direction": "row", display: "flex", "align-items": "center", "justify-content":"center"}}>
            <h4 style={{"margin": 12}}>Select a day:</h4>
            <select onChange={(e)=> this.props.setSourceTime(e.target.value)}>
              <option value="20181027">Sat Oct 27</option>
              <option value="20181026">Fri Oct 26</option>
              <option value="20181025">Thur Oct 25</option>
              <option value="20181024">Wed Oct 24</option>
              <option value="20181023">Tues Oct 23</option>
              <option value="20181022">Mon Oct 22</option>
              <option value="20181021">Sun Oct 21</option>
              <option value="20181020">Sat Oct 20</option>
            </select>
          </div>
        </div>
        <div style={visitorStyle}>
          <h4>Estimated Visitors Today: {this.props.visitors}</h4>
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
