import React, { Component } from 'react';
import '../topPlaces.css';
import firebase from 'firebase';
class FavoritePlaces extends Component {
  componentDidMount() {
    firebase.database().ref("Locations").on("value", (snapshot)=>{
      let locations={}
      let data = snapshot.val()
      Object.keys(data).forEach(time=>{
        if (data[time].location.name in locations){
          locations[data[time].location.name] = locations[data[time].location.name]+1
        }else{
          locations[data[time].location.name] = 1
        }
      })
      this.setState({locations:locations})
    })
  }
  state={
    locations: {},
  }

  getImage=(name)=>{
    switch(name) {
      case "Conservatory Garden":
          return require('../imgs/conservatory_garden.jpg')
      case "Belvedere Castle":
          return require('../imgs/bel_cast.jpg')
      case "Conservatory Pond":
          return require('../imgs/conservatory_pond.jpg')
      case "Bow Bridge":
          return require('../imgs/bow_bridge.jpg')
      case "Strawberry Garden":
          return require('../imgs/strawberry_fields.jpg')
      default:
          return ""
      }
  }
  render(){


    return (
      <div className="App">
        <h4>Top Places: </h4>
        <table style={tableStyle}>
          <div style={rowStyle}>
            {Object.keys(this.state.locations).sort((a,b)=>{return this.state.locations[b]-this.state.locations[a]}).map(location => {
              return (
                <div>{location} {this.state.locations[location]}
                <img src={this.getImage(location)} style={{width: 150}} />
                </div>
              )
            })}
          </div>
        </table>
      </div>
    );
  }
}

const rowStyle={
 "flex-direction": 'row',
 "display": 'flex',
 "align-items": 'center'
}

const tableStyle={
  "align-items": 'center',
  "justify-content": 'space-between',
  "flex-direction": 'row',
  "display": 'flex',
   "position": 'relative',
   "min-width": '450px',
   "min-height": '250px',
   "boxSizing": 'border-box',
   "border": '5px solid #FFAB91',
   "border-radius": '20px',
   "text-align": 'left',
   "padding": '5px 10px'
}

export default FavoritePlaces;
