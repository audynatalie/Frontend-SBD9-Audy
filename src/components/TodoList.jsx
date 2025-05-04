import React, { useEffect, useState } from 'react';
import { ClipboardList, X } from 'lucide-react'; // Ensure X is imported for error handling
import TodoItem from './TodoItem';
import TodoAPI from '../config/api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetching all todos from API
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await TodoAPI.getAllTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to load todos. Please try again later.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handling deletion of a todo
  const handleDeleteTodo = async (id) => {
    try {
      await TodoAPI.deleteTodo(id);
      // Remove the deleted todo from the state
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
      console.error('Error deleting todo:', err);
    }
  };

  // Handling update of a todo
  const handleUpdateTodo = async (id, data) => {
    try {
      const updatedTodo = await TodoAPI.updateTodo(id, data);
      setTodos((prevTodos) => 
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (err) {
      setError('Failed to update todo. Please try again.');
      console.error('Error updating todo:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-blue-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-48 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded w-40"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <X className="h-5 w-5 text-red-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <ClipboardList className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-2 text-lg font-medium text-gray-900">No tasks yet</h2>
          <p className="mt-1 text-gray-500">Get started by creating a new task.</p>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Tasks ({todos.length})</h2>
          <div className="space-y-3">
            {todos.map(todo => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                onDelete={handleDeleteTodo} 
                onUpdate={handleUpdateTodo} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
