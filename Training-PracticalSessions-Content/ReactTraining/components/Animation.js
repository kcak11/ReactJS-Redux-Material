import React from 'react';
/*import ReactCSSTransitionGroup from 'react-addons-css-transition-group';*/
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {

   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {1000}
               transitionEnter = {false} transitionLeave = {false}>
          
               <h1>Welcome</h1>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
}

export default App;
