import { useEffect, useState } from 'react';
import { TodoInput } from './components/todo/TodoInput';
import { TodoList } from './components/todo/TodoList';

// 기본 카테고리 설정
const DEFAULT_CATEGORIES = [
  { id: 1, name: '개인' },
  { id: 2, name: '업무' },
  { id: 3, name: '쇼핑' }
];

function App() {
  const [category, setCategory] = useState(DEFAULT_CATEGORIES[0].id);

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];});

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false, categoryId: category }
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

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>
      <TodoInput onAdd={addTodo} categories={DEFAULT_CATEGORIES} category={category} onCategoryChange={setCategory} />
      <div className="mt-4">
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
