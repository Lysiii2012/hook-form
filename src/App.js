import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Title/Title";
import HookForm from "./components/HookForm/HookForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
 
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) { 
        const parsedTodos = JSON.parse(storedTodos);
        setTodos(parsedTodos);  
    } 
  }, []);  
 
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos)); 
    }
  }, [todos]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Title text="Add Todo" type="primary" />
      <HookForm onAddTodo={handleAddTodo} />
      <Title text="My Todos" type="secondary" />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
