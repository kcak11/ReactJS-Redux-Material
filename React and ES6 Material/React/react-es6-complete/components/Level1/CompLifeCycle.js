import React from 'react';

class CompLifeCycle extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0,
         msg: 'Initial data...',
         newmsg:'Nodata'

      }

      this.setNewNumber = this.setNewNumber.bind(this)
      this.updateState = this.updateState.bind(this);
      this.updateStateMsg = this.updateState.bind(this);
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   updateState(e) {
      this.setState({msg:e.target.value});
   }

      
   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data} ></Content>
            <br/>

             <input type = "text" value = {this.state.msg} 
               onChange = {this.updateState} />
             <h3>{this.state.msg}</h3>  
             
             
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>


           
         </div>
      );
   }
}

export default CompLifeCycle;
