import React from 'react';

class StatefulApp extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Murthy",
               "age":"46"
            },
				
            {
               "id":2,
               "name":"Kavitha",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Kiran",
               "age":"40"
            }
         ]
      }
   }
	
   render() {
      if(!this.props.show){
         return <div></div>;
      }
      return (
         <div className="well">
            <Header/>
            <table className='table-hover table-bordered'>
               <tbody>
                  {this.state.data.map((person, i) =>
                      <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 className='text-danger'>Employees</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      var {id,name,age}=this.props.data;
      return (
         <tr className='bg-success'>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
         </tr>
      );
   }
}

export default StatefulApp;
