//=================
// Import the dependencies that this component will need
// to function properly
//=================
import React, { Component } from "react";

//=================
// Here we will import our navigation dependency
//=================
import Navigation from './navigation';

//=================
// This is the component we'll be exporting into the
// #app element on the index.html file.
//=================
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
