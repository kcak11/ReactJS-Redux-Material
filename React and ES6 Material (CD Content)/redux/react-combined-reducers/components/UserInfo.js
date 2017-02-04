import React, { Component } from 'react'

class UserInfo extends Component {

  handleNewId() {
    // dispatch now by invoking function from actions.js
    this.props.createNewUserId()
  }

  render() {
    return (
      <li>
        <div>User name: {this.props.user.username}</div>
        <div>id: {this.props.user.id}</div>
        <button 
        onClick={this.handleNewId.bind(this)}>Update with random ID</button>
      </li>
    )
  }

}

export default UserInfo
