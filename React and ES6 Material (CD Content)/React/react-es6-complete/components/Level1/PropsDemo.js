import React from 'react';

class PropsDemo extends React.Component {	
   
   render() {
      return (
         <div>
            <h1 className='text-success'>{this.props.headerProp}</h1>
            <h3 className='text-danger'>{this.props.contentProp}</h3>
         </div>
      );
   }
}

PropsDemo.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Corporate Trainings online"
}

export default PropsDemo;
