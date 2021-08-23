import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodos = state => state.TodoListItem

const TodoList = () => {
  const todos = useSelector(selectTodos)

  const renderedListItems = totos.map(todo => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">renderedListItems</ul>
}

export default TodoList