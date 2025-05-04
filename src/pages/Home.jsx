import React, { useState } from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

const Home = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTodoAdded = () => {
    // Trigger re-fetch of todos by incrementing the refresh key
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Manage Your Tasks
        </h1>
        <AddTodoForm onTodoAdded={handleTodoAdded} />
        <TodoList key={refreshKey} />
      </div>
    </div>
  );
};

export default Home;
