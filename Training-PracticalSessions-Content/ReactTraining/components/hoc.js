import React from 'react';

var newData = {
   data: 'Data from High Order Component - Imitating REDUX',
}

var MyHOC = (ComposedComponent,C2) =>
 class extends React.Component {

   componentDidMount() {
      this.setState({
         data:newData.data
      });
   }

   render() {
      return (
      <div>
      {
         this.props.ctype==="t1"?<ComposedComponent {...this.props} {...this.state} />:<C2 {...this.props} {...this.state}/>
      }
      </div>
      );
   }
};


class MyComponent extends React.Component {
   render() {
      return (
         <div>
            <h1>t1 - {this.props.data}</h1>
         </div>
      )
   }
}

class AshishComponent extends React.Component {
   render() {
      return (
         <div>
            <h1>t2 - {this.props.data}</h1>
         </div>
      )
   }
}

export default MyHOC(MyComponent,AshishComponent);