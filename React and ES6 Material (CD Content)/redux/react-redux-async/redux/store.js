import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
//add this
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	// add thunk
  applyMiddleware(thunk, logger())
)(createStore)


export default function 
  configureStore(initialState = { todos: [], user: {} }) {
  	return finalCreateStore(rootReducer, initialState)
}
