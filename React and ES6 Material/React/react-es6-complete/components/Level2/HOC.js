/*

Higher order components are JavaScript functions which are used for 
adding additional functionality to existing component. 

These functions are pure which means they are receiving data and
 returning values according to that data. If data changes, higher 
 order functions is re-run again with different data input. 

 If we want to update our returning component, we don't have to change our HOC.
  All we need to do is change the data that our function is using.

Higher order component (HOC) is wrapping around "normal" component and
 provide additional data input. It is actually a function that takes
  one component and returns another component that wraps the original one.
In this tutorial we will use simple example, so you can easily understand
 how this concept works. The MyHOC is a higher order function that is used
  only to pass data to MyComponent. This function takes MyComponent, enhances 
  it with newData and returns the enhanced component that will
   be rendered on screen.
*/

import React from 'react';

var newData = {
   data: 'Data from High Order Component - Imitating REDUX',
}

var MyHOC = ComposedComponent =>
 class extends React.Component {

   componentDidMount() {
      this.setState({
         data: newData.data
      });
   }

   render() {
      return <ComposedComponent {...this.props} {...this.state} />;
   }
};


class MyComponent extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.data}</h1>
         </div>
      )
   }
}

export default MyHOC(MyComponent);
