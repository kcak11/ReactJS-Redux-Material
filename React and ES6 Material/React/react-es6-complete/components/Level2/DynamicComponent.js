//components dynamically create child components at 
//runtime based on the runtime state of the application
import React from 'react'
import UserList from './UserList'
class App extends React.Component {
  
render(){
	return (
	<tr>
		<td>{this.props.user.userName}</td>
		<td>
			<a href={'mailto:' + this.props.user.email}>
			{this.props.user.email}
			</a>
		</td>
	</tr>
  );
}
}
export default App
