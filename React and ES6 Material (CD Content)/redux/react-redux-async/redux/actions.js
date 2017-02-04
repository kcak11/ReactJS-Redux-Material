let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },
 // do some async server call
 // onSuccess: dispatch(action{type:'..'})
  createNewUserIdAsync: function() {
    return (dispatch) => {
      // if it is server call then use ajax with jquery
      /*
      $.get('url',{
        success:(res)=>{
           dispatch(createNewUserId(res.data);
        },
        error:(res)=>{dispatch(handleError(res.data))}
      })
  */
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  }

}

export default actions
