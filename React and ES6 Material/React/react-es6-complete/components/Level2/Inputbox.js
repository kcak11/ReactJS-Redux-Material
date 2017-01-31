import React from 'react';

// State tree (redux) -   Component tree (react) - DOM tree(HTML)
//Dumb Component - child
class InputBox extends React.Component {
	constructor(props){
		super(props)
	}
			
	render(){		
		return (
			<input type="text" valueLink={this.props.customValueLink} />
		)
	}	
}
export default InputBox