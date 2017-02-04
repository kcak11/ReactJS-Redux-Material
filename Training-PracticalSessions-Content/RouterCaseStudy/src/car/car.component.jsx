import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Car extends Component{
	render(){
		const cars=this.props.route.data;
		const carNode=cars.map((car)=>{
			return(
				<Link to={"/cars/"+car.id} className="list-group-item" key={car.id}>
					{car.name}
				</Link>
			);
		});
		return(
			<div>
				<h1>Cars page (click on car to get details)</h1>
				<div className="list-group">
					{carNode}
				</div>
			</div>
		);
	}
}