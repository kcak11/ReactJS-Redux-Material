import React from 'react';

var App = React.createClass({
getInitialState() {
	return (
		{ name: 'Nothing'}
	   );
	},
handleChange(event) {
	this.setState({ name: event.target.value });
	console.log(event.target.value)
},
handleSubmit(event){
	alert("Form Submitted for "+ this.state.name)
},
render() {
	return (
		<div className="well" >
		 <h2 className="text-success">{this.props.title}</h2>
		  <h3 className="text-danger">{this.props.subtitle}</h3><br/>
			<h3 class="text-info">Login </h3>

			User Name : 
			<input type="text"
				value={this.state.name}
				onChange={this.handleChange} />
			<br/>
			Email:<input type="text" value="sri@yahoo.com" />
			<br/>
			Password : 
			<input type="password"/><br/>
			<input type="submit" className="btn  btn-primary" 
			value="Login" onClick={this.handleSubmit}/>
		</div>
		);		
   }
});
export  default App 
