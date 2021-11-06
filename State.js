import React, { Component } from 'react'     //rce is shate cut

export class State extends Component {
  state = {
      name:"Prabhakar",
  }
  render() {
    return (
      <div>
        <center>
        <h1>HI {this.state.name} </h1>
        </center>
      </div>
    )
  }
}

export default State
