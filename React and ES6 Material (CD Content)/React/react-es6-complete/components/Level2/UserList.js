import React from 'react'


class UserList extends React.Component{

	constructor(props) {
      super(props)
      this.state = {
         users: [
		{
			id: 1,
			userName: 'Srirama Murthy',
			email: 'murthy@yahoo.com'
		},
		{
			id: 2,
			userName: 'Kavitha',
			email: 'kavitha@gmail.com'
		}]
	  }
    }    
  

  render(){ 		

		var users = this.state.users.map((user)=> {
			// key prevents react warning
			return (
			   <UserRow user={user}  key={user.id}/>
			     )
		    })
         };

		return (
			<table className='myStyle' >
			<caption>Dynamic Components</caption>
				<tr>
					<th>User Name</th>
					<th>Email Address</th>
				</tr>
			{users}
			</table>
			);	     
	}
 
export default UserList