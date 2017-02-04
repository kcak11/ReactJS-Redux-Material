import React,{Component} from 'react';
import {connect} from 'react-redux';
import {testAction} from '../actions/index.js';

class Dashboard extends Component{
	handleClickHello(){
		this.props.testAction();
	}
	render(){
		return(
			<div>
				<h4>Ashish's Training Club</h4>
				<a onClick={this.handleClickHello.bind(this)}>Click me to invoke REST API</a>
				<h3>{this.props.auth.message}</h3>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		auth:state.auth
	}
}


export default connect(mapStateToProps,{testAction})(Dashboard);