import React from 'react'
import InputBox from './inputbox'

//Using  ReactLink type approach - Do not use Mixin as it is obsolete now and
// replaced with High Order component (HOC)
// Smart component - Parent 
class App extends React.Component {
	constructor(){
		super()
		this.state={value:'Murthy '}
		console.log(this.state.value)
	}

	update(modifiedValue){
		this.setState({value: modifiedValue});
	}	
		
	render(){
		var customValueLink={
			value: this.state.value,
			requestChange: this.update.bind(this)
		};
		return (
			<div className="well bg-success">
			<h2 className="text-success">Two Way Binding in React</h2>
				<h4>{this.state.value}</h4> 		
				<InputBox customValueLink={customValueLink} />
			</div>
		);
	}
}
export default App