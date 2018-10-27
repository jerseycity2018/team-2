import React, { Component } from 'react';
import Select from 'react';
import firebase from 'firebase'


let msgBox=(msg)=>
 <div style={{"flex":'1'}}>
   <div style={msgBoxStyle}>
     <p>{msg}</p>
   </div>
 </div>
;

class Issues extends Component {

 constructor(props) {
   super(props);
   this.state = {value: 'Garbage', complaints:{Garbage:[]} };
   this.handleChange = this.handleChange.bind(this);

 }
 componentDidMount() {
   firebase.database().ref("Complaints").on("value", (snapshot)=>{
     this.setState({complaints:snapshot.val()})
   })
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 render() {

   return (
     <section className="App" style={sectionStyle}>
     <div>

       <div style={rowStyle}>
         <h4>Complaints </h4>
         <select style={{"margin":10}} value={this.state.value} onChange={this.handleChange}>
           <option value="Garbage">Garbage</option>
           <option value="noise">Noise</option>
           <option value="misuse">Inappropriate Usage</option>
           <option value="others">Others</option>
         </select>
       </div>
       <div style={msgStyle}>
         {Object.keys(this.state.complaints[this.state.value]).map(complaint=>{return (msgBox(this.state.complaints[this.state.value][complaint]))})}
       </div>
       <div style={msgStyle}>

       </div>
     </div>
   </section>
   );

 }
}

const rowStyle={
 "flex-direction": 'row',
 "display": 'flex',
 "align-items": 'center'
}
const sectionStyle = {
 "padding-left": '50px',
 "padding-right": '50px',
 "min-width": 700
};

const msgStyle = {
 "flex-direction": 'row',
 "display":'flex'
}

const msgBoxStyle = {
 "color":'white',
 "font-weight": 'bold',
 "position": 'relative',
 "width": '250px',
 "height": '250px',
 "boxSizing": 'border-box',
 "border": '5px solid #fff',
 "border-radius": '20px',
 "text-align": 'left',
 "padding": '5px 10px',
 "background": '#FFAB91'
}

export default Issues;
