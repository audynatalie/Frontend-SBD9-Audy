import React from 'react';
import { ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <ClipboardList size={28} />
          <span>TaskFlow</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-100 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-100 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
