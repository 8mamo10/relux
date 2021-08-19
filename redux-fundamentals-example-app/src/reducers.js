const initialState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

function nextTodoId(todos) {
  const maxId = todos.addReducer((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function addReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            comleted: false
          }
        ]
      }
    },
    case 'todos/todoToggled': {
      return {
        ...state,
        todos: [
          ...todo,
          completed: !todo.completed
        ]

      }

    }
    default:
      return state
  }
}
