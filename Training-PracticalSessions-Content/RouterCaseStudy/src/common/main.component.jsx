import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Main extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">Ashish's Cars</a>
				    </div>
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li className="active">
				        	<Link to="/" activeClassName="active">Home</Link>
			        	</li>
				        <li className="active">
				        	<Link to="/cars" activeClassName="active">Cars</Link>
			        	</li>
				        <li className="active">
				        	<Link to="/about" activeClassName="active">About</Link>
			        	</li>
				      </ul>
				    </div>
				  </div>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
