import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)  
    this.state={ name: this.props.name }  
  }

  componentWillMount(){
  console.log("componentWillMount");
    //React.addons.Perf.start();
  }

    componentDidMount(){
    console.log("componentDidmount");
      //React.addons.Perf.stop();
      //React.addons.Perf.printWasted();
    } 

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
    React.addons.Perf.start();
    console.log("componentWillUpdate 2");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    React.addons.Perf.stop();
    React.addons.Perf.printWasted();
}

  changeName() {
    console.log("changeName.. called");
    this.setState({ name:"Murthy" });
  }

	render(){
       return (
          <div>Hello {this.state.name}
            <input type="button" onClick={this.changeName.bind(this)} 
            value="change the second name"/>
         </div>
         )
	}
}
export default App