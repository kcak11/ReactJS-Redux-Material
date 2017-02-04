import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

const products=[
{id:2424,name:"Pendrive",price:23.45,rating:2},
{id:4646,name:"Monitor",price:243.45,rating:3},
{id:2784,name:"CPU",price:723.45,rating:4.5},
{id:9820,name:"Mouse",price:283.45,rating:5}
];

ReactDOM.render(<App products={products}/>, document.getElementById('app'));