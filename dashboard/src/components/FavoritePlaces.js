import React, { Component } from 'react';
import '../topPlaces.css';
import firebase from 'firebase'
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
  render(){


    return (
      <div className="App">
      <h4>Top Places: </h4>
      <table style={{ width:"60%"}}>
          <tr>
           {Object.keys(this.state.locations).map(location => {
            return (
              <td>{location} {this.state.locations[location]}</td>
            )
          })}
          </tr>
      </table>
      </div>
    );
  }
}

export default FavoritePlaces;
