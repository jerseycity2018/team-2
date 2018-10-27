import React, { Component } from 'react';
import '../topPlaces.css';
class TopHashtags extends Component {
  render(){
    // var trStyle = {
    //   border: "5px solid red"
    // };
    return (
      <div className="App">
        <ul style={{"list-style-type": "none"}}>
          <li id = "hashTag1">#</li>
          <li id = "hashTag2">#</li>
          <li id = "hashTag3">#</li>
          <li id = "hashTag4">#</li>
          <li id = "hashTag5">#</li>
          <li id = "hashTag5">#</li>
        </ul>
      </div>
    );
  }
}

export default TopHashtags;
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
