import React from 'react';
import { ClipboardCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <ClipboardCheck size={36} className="text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800">About TaskFlow</h1>
        </div>
        
        <div className="prose lg:prose-lg">
          <p className="text-gray-600 mb-4">
            TaskFlow is a simple, yet powerful task management application designed to help you
            stay organized and productive. With an intuitive interface and essential features,
            TaskFlow makes it easy to keep track of your daily tasks.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Create, edit, and delete tasks effortlessly</li>
            <li>Mark tasks as complete with a single click</li>
            <li>Clean, intuitive user interface</li>
            <li>Responsive design that works on all devices</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Technology Stack</h2>
          <p className="text-gray-600 mb-4">
            TaskFlow is built using modern web technologies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Frontend: React.js with JavaScript and Tailwind CSS</li>
            <li>Backend: Express.js with Node.js</li>
            <li>Database: PostgreSQL</li>
            <li>State Management: React hooks and context API</li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
