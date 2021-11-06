import React, { Component } from 'react'     //rce is shate cut
import Display from './Display'

export class Props extends Component {
  state = {
      name:"Prabhakar",
      age:29,
      city:"Guntur"   
  }
  render() {
    return (
      <div>
        <center>
        {/* <h1>HI {this.state.name} </h1> */}
        <Display name={this.state.name}/>
        </center>
      </div>
    )
  }
}

export default Props
