import React,{useState} from "react";
import'./App.css';
import TodoForm from './Components/Todoform';
import TodoList from './Components/todoList';


const App=()=>{
  const [todos,setTodos]=useState([]);
  const[filter,setFilter]=useState('all');

  const addTodo=(Todo)=>{
    setTodos([...todos,Todo]);
  };

  const updateTodo=(updateTodo)=>{
    setTodos(todos.map((todo)=>(todo.id===updateTodo.id?updateTodo:todo)));
  
  }
  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }

  const filteredTodos=todos.filter(todo =>{
    if(filter ==='completed') return todo.status==='completed';
    if(filter ==='incompleted') return todo.status!=='not_completed';
    return true;
  });
    
  return(
    <div className="App">
      <h1>TO-DO APP</h1>
      <h2>Set your goals Today!!</h2>
      <TodoForm addTodo={addTodo} />
      <div>
        <button onClick={()=>setFilter('all')}>All</button>
        <button onClick={()=>setFilter('completed')}>Completed</button>
        <button onClick={()=>setFilter('incompleted')}>Incompleted</button>
      </div>
      <TodoList 
      todos={filteredTodos}
       updateTodo={updateTodo} 
       deleteTodo={deleteTodo}/>
      </div>
  );

};
export default App;

