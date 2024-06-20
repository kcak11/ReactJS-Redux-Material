import React, { Component } from 'react'
import TextInput  from './TextInput'

class App extends Component {
//Render function can have only one top element I
  render() {
    return (
    	<div className="text-danger">
    		<div>This is App component</div>
    		<TextInput/>
    	</div>
    	)
  }
}

export default App