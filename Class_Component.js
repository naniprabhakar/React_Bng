import React, { Component } from 'react'     //rce is shate cut

 export class Class_Component extends Component {
   state = {
       name:"Prabhakar",
       age:29,
       city:"Guntur"   
   }
   render() {
     return (
       <div>
         <h1>HI {this.state.name,this.state.age,this.state.city} </h1>
       </div>
     )
   }
 }
 
export default Class_Component
