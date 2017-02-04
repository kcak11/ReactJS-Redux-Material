import React from 'react';
class StatelessApp extends React.Component {
   render() {
      console.log(this.props.show);
      if(!this.props.show){
         return <div></div>;
      }
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 className="well">Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default StatelessApp;
