import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

/*
let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}
*/

//const store = createStore(rootReducer, preloadedState)

//const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
//const store = createStore(rootReducer, undefined, composedEnhancer)

const middlewareEnhancer = applyMiddleware(print1, print2, print3)
const store = createStore(rootReducer, middlewareEnhancer)

export default store