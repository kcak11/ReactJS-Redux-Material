import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <UserInfo 
          user={this.props.user} 
          createNewUserId={this.props.actions.createNewUserId}/>

        <TodoInput addTodo={this.props.actions.addTodo}/>

        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    // now you can directly bind actions in react components via props
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
