import {Link} from 'react-router';
import React,{Component} from 'react';

export default class Navigation extends Component{
	render(){
		return(
			<div className="frame bit-1 navigation_container">
				<h3 className="bit-40">
					<Link to="/">React - Redux - Thunk - Axios by Ashish</Link>
				</h3>
				<ul>
					<li key={100}>
						<Link to="dashboard">Dashboard</Link>
					</li>
					<li key={101}>
						<Link to="login">Login</Link>
					</li>
				</ul>
			</div>
		);
	}
}