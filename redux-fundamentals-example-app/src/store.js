import { createStore, compose } from 'redux'
import rootReducer from './reducer'
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

//const store = createStore(rootReducer, preloadedState)
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
const store = createStore(rootReducer, undefined, composedEnhancer)

export default store