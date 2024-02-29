import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}


const TodoList = ({todos , setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map((todo)=> <SingleTodo  todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}/> )}
    </div>
  )
}

export default TodoList
