import React, { useState } from "react";
import { Check, Trash2, Edit, X, Save } from "lucide-react";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDueDate, setEditDueDate] = useState(todo.due_date || "");
  const [editCompleted, setEditCompleted] = useState(todo.completed);

  const handleEdit = () => {
    setIsEditing(true);
    setEditTitle(todo.title);
    setEditDueDate(todo.due_date);
    setEditCompleted(todo.completed);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle(todo.title);
    setEditDueDate(todo.due_date);
    setEditCompleted(todo.completed);
  };

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, {
        title: editTitle,
        completed: editCompleted,
        due_date: editDueDate,
      });
      setIsEditing(false);
    }
  };

  const handleToggleComplete = () => {
    if (isEditing) {
      setEditCompleted(!editCompleted);
    } else {
      onUpdate(todo.id, {
        title: todo.title,
        completed: !todo.completed,
        due_date: todo.due_date
      });
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 transition-all duration-300 ${
        isEditing
          ? editCompleted
            ? "border-green-500 bg-green-50"
            : "border-blue-500"
          : todo.completed
          ? "border-green-500 bg-green-50"
          : "border-blue-500"
      }`}
    >
      <div className="flex items-center justify-between">
        {isEditing ? (
          <div className="flex-1 flex items-center space-x-3">
            <button
              onClick={handleToggleComplete}
              className={`h-6 w-6 rounded-full flex items-center justify-center transition-colors ${
                editCompleted
                  ? "bg-green-500 text-white"
                  : "border-2 border-gray-300"
              }`}
              aria-label={editCompleted ? "Mark as incomplete" : "Mark as complete"}
            >
              {editCompleted && <Check size={16} />}
            </button>
            <input
              type="text"
              className={`flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ${
                editCompleted ? "line-through text-gray-500" : ""
              }`}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              autoFocus
            />
            <input
              type="date"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />
            <button
              onClick={handleSaveEdit}
              className="text-green-600 hover:text-green-800 transition-colors p-2"
              aria-label="Save"
            >
              <Save size={18} />
            </button>
            <button
              onClick={handleCancelEdit}
              className="text-red-600 hover:text-red-800 transition-colors p-2"
              aria-label="Cancel"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-3 flex-1">
              <button
                onClick={handleToggleComplete}
                className={`h-6 w-6 rounded-full flex items-center justify-center transition-colors ${
                  todo.completed ? "bg-green-500 text-white" : "border-2 border-gray-300"
                }`}
                aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
              >
                {todo.completed && <Check size={16} />}
              </button>
              <span className={todo.completed ? "line-through text-gray-500" : "text-gray-800"}>
                {todo.title}
              </span>
              <span className="text-sm text-gray-500">Due: {todo.due_date}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleEdit}
                className="text-blue-600 hover:text-blue-800 transition-colors p-2"
                aria-label="Edit"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="text-red-600 hover:text-red-800 transition-colors p-2"
                aria-label="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;