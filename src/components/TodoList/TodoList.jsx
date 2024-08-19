const TodoList = ({ todos, onDeleteTodo }) => {
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => onDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList;