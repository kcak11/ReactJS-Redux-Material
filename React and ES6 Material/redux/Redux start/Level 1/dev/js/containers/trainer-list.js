//Container and component both can be represented as unit as they present data
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// hook the action
import {selectTrainer} from '../actions/index';

class TrainerList extends Component{
	createListItems(){
		return this.props.trainers.map((trainer)=>{
			return (
				<div  
				  key={trainer.id}
				  onClick={() => this.props.selectTrainer(trainer)} >

				  {trainer.first} {trainer.last} 
				
				</div>
				);
			});		
	}

render(){
	return(
       <div className='bg'>		
			{this.createListItems()}
		</div>
		)
 }
}

//Now to Hook container to component, write below function 
//It takes application data(state) from store and pass it 
//to component(userlist) as property

//You can write below peace of code in separate container.js


function mapStateToProps(state){
	//So  take state from store and pass to component as props
   return {
   	trainers:state.trainers
   }
}

// this function is to map activeTrainer (dispatch means call action with event)

function matchDispatchToProps(dispatch){
   // pass prop selectTrainer with action selectTrainer
  return bindActionCreators({selectTrainer:selectTrainer},dispatch);
}

//to use above function call connect and bind mapStateToProps and Component

export default connect(mapStateToProps,matchDispatchToProps)(TrainerList) 

// now import this into app.js
