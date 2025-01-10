import { useEffect, useState } from 'react';
import { TodoInput } from './components/todo/TodoInput';
import { TodoList } from './components/todo/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];});

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>
      <TodoInput onAdd={addTodo} />
      <div className="mt-4">
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
