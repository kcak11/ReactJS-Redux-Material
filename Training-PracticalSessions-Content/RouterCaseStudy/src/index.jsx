import React, {Component} from 'react';
import { render } from 'react-dom';

import {Router,Route,IndexRoute,browserHistory} from 'react-router';

import Main from './common/main.component.jsx';
import Home from './common/home.component.jsx';
import About from './common/about.component.jsx';
import Car from './car/car.component.jsx';
import CarDetail from './car/car-detail.component.jsx';

const data=[
	{
		id:1,
		name: 'Honda Accord Crosstour',
		year: '2010',
		model: 'Accord Crosstour',
		make: 'Honda',
		media: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSG1VlfMAlG2lqyafCjJSAVX6VdGMTaq3uLLYPwIQ_q-5RB_KsR',
		price: '$16,811'
	},
	{
		id:2,
		name: 'Maruti',
		year: '2011',
		model: 'Suzuki',
		make: 'Maruti',
		media: 'http://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg',
		price: '$16,811'
	},
	{
		id:3,
		name: 'Toyota',
		year: '2012',
		model: 'Qualis',
		make: 'Toyota',
		media: 'http://img.autobytel.com/car-reviews/autobytel/112808-2012-s-top-ten-fastest-production-sports-cars/2012-ferarri-f12-berlinetta.jpg',
		price: '$16,811'
	},
	{
		id:4,
		name: 'Ford',
		year: '2013',
		model: 'Endeavour',
		make: 'Ford',
		media: 'http://img.autobytel.com//2016/alfa-romeo/4c/2-800-oemexteriorfront1300-79851.jpg',
		price: '$16,811'
	}
];

render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Home}/>
			<Route path="/cars" component={Car} data={data}/>
			<Route path="/cars/:id" component={CarDetail} data={data} />
			<Route path="/about" component={About}/>
		</Route>
	</Router>,
	document.getElementById("container")
);
	
