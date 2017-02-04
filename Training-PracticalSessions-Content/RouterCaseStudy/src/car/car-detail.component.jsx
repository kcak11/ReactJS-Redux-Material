import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class CarDetail extends Component{
	handleRedirect(){
		browserHistory.push('/cars');
	}
	render(){
		const cars=this.props.route.data;
		const id=this.props.params.id;
		const car=cars.filter((car)=>{
			if(car.id===parseInt(id,10)){
				return car;
			}
		});
		var {name,model,make,year,price,media}=car[0];
		return(
			<div>
				<h1>{name}</h1>
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<div className="thumbnail">
							<img src={media} title={name}/>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<ul>
							<li><strong>Model</strong>:{model}</li>
							<li><strong>Make</strong>:{make}</li>
							<li><strong>Year</strong>:{year}</li>
							<li><strong>Price</strong>:{price}</li>
							<li><strong>Model</strong>:{model}</li>
						</ul>
					</div>
					<div className="col-md-12">
						<button className="btn btn-primary" onClick={this.handleRedirect.bind(this)}>
							Go to Cars
						</button>
					</div>
				</div>
			</div>
		);
	}
}