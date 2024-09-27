import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h2 className="text-lg font-bold p-4">Project Management</h2>
      <nav className="flex flex-col p-4">
        <NavLink to="/users" className="py-2 hover:bg-gray-700 rounded">Users</NavLink>
        <NavLink to="/projects" className="py-2 hover:bg-gray-700 rounded">Projects</NavLink>
        <NavLink to="/tasks" className="py-2 hover:bg-gray-700 rounded">Tasks</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
