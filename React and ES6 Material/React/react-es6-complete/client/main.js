import React from 'react'
import ReactDOM from 'react-dom'

//Stateless 
//import StatelessApp from '../components/Level1/StatelessApp'
//ReactDOM.render(<StatelessApp/>,
//	  document.getElementById('app'))

//Stateful
//import StatefulApp from '../components/Level1/StatefulApp'
//ReactDOM.render(<StatefulApp/>,document.getElementById('app'))

//props demo
//import PropsDemo from '../components/Level1/PropsDemo';
//ReactDOM.render(<PropsDemo headerProp = "Murthy Infotek"/>, 
//	document.getElementById('app'));


//validation
//import ValidationApp from '../components/Level1/ValidationApp'
//ReactDOM.render(<ValidationApp/>,document.getElementById('app'))

//ForeUpdate
//import App from '../components/Level1/ForceUpdate'
//ReactDOM.render(<App/>,document.getElementById('app'))

//Finding DOM node
//import App from '../components/Level1/FindDOMNode'
//ReactDOM.render(<App/>,document.getElementById('app'))

/*
//Shopping
// Render the ServiceChooser component, and pass the array of services
import ServiceChooser from '../components/Level1/ServiceChooser'
var services = [
    { name: 'Web Development', price: 30000 },
    { name: 'Design', price: 40000 },
    { name: 'Integration', price: 25000 },
    { name: 'Training', price: 80000 }
];
ReactDOM.render(
    <ServiceChooser items={ services } />,
    document.getElementById("app")
)
*/


//Events with state and props
//import App from '../components/Level1/App'
//ReactDOM.render(<App />, document.getElementById('app'))

//Component Life cycle
//import CompLifeCycle from '../components/Level1/CompLifeCycle'
//ReactDOM.render(<CompLifeCycle/>, document.getElementById('app'));
// Below line is to test Component life cycle unount 
//setTimeout(() => {
  // ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);

//child-parent talk
//import App from '../components/Level1/ChildParentInvoke'
//ReactDOM.render(<App/>, document.getElementById('app'));


//using Refs
//import App from '../components/Level1/UsingRefs'
//ReactDOM.render(<App/>, document.getElementById('app'));
//using Dynamic Content
//import App from '../components/Level1/DynamicContent'
//ReactDOM.render(<App/>, document.getElementById('app'));

//High Order Component
//Enter Leave Animation
//import App from '../components/Level2/HOC'
//ReactDOM.render(<App/>, document.getElementById('app'));

//Twoway data binding
//import App from '../components/Level2/Twowaybinding'
//ReactDOM.render(<App/>,document.getElementById('app'))


//Dynamic Component
//import  App from '../components/Level2/DynamicComponent'
//ReactDOM.render(<App/>, document.getElementById('app'));



//Exercise
//import  App from '../components/exercise/demo1'
//ReactDOM.render(<App/>, document.getElementById('app'));




//Animation
//import App from '../components/Level2/Animation'
//ReactDOM.render(<App/>, document.getElementById('app'));

//Enter Leave Animation
//import App from '../components/Level2/HOC'
//ReactDOM.render(<App/>, document.getElementById('app'));

//Performance
import App from '../components/Level2/performance'
ReactDOM.render(
		  <App name="Murthy" />,
		    document.getElementById('app')
		    );