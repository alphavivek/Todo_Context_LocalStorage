import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './component/TodoForm';
import TodoItem from './component/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const editTodo = (todo, id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }

  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      console.log("Stored Todos:", storedTodos);

      // Check if there's any stored data
      if (storedTodos) {
        // Parse the JSON data safely
        const todos = JSON.parse(storedTodos);
        console.log("Parsed Todos:", todos);

        // If valid todos array, update the state
        if (Array.isArray(todos)) {
          setTodos(todos);
        }
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
    }
  }, []);


  useEffect(() => {
    try {
      if (todos && todos.length > 0) {
        console.log("Saving Todos to LocalStorage:", todos);
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    } catch (error) {
      console.error("Failed to save todos to localStorage:", error);
    }
  }, [todos]); // This ensures it writes to localStorage every time todos changes



  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
