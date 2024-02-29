import { useState } from 'react';
import './App.css'
import InputFieldd from './components/InputFieldd';
import { Todo } from './model';
import TodoList from './components/TodoList';



const App:React.FC = () => {

  const [todo , setTodo] = useState<string>("");
  const [todos , setTodos] = useState<Todo[]>([]);

  const handelAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }


  
  return (
    <>
      <div className="container">
        <span className="title">Taskify</span>

        <InputFieldd todo={todo} setTodo={setTodo} handleAdd={handelAdd} />
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App;
