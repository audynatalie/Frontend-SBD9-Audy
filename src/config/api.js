const API_BASE_URL = 'http://localhost:3000';

// General error handler for responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Error: ${response.status}`);
  }
  return response.json();
};

// Get all Todos
export const getAllTodos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, { // Assuming the backend route is '/todos'
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Update Todo
export const updateTodo = async (id, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

// Create Todo
export const createTodo = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Send the full data object
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

// Delete Todo
export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};

export default {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};