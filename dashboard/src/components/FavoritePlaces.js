import React, { Component } from 'react';
import '../topPlaces.css';
class FavoritePlaces extends Component {
  render(){
    // var trStyle = {
    //   border: "5px solid red"
    // };
    return (
      <div className="App">
      <table style={{border: "5px solid red", width:"60%"}}>
          <tr style={{border: "5px solid red"}}>
            <td style={{border: "5px solid red"}}>Test1</td>
            <td style={{border: "5px solid red"}}>Test1</td>
          </tr>
          <tr style={{border: "5px solid red"}}>
            <td style={{border: "5px solid red"}}>Test1</td>
            <td style={{border: "5px solid red"}}>Test1</td>
          </tr>
          <tr style={{border: "5px solid red"}}>
            <td style={{border: "5px solid red"}}>Test1</td>
            <td style={{border: "5px solid red"}}>Test1</td>
          </tr>
      </table>
      </div>
    );
  }
}

export default FavoritePlaces;
//import './topPlaces.css';
//import ReactTable from "react-table"
// const data = [{
//   locationName:'',
//   locationName:''
// },{
//   locationName:'',
//   locationName:''
// },{
//   locationName:'',
//   locationName:''
// }]
// const columns = [{
//   Header :'',
//   accessor: 'locationName'
// },{
//   Header:'',
//   accessor:'locationName'
// }]

// <ReactTable
//  data = {data}
//  columns = {columns}
//  defaultPageSize = {3}
//  pageSizeOptions = {[3,6]}
// />
