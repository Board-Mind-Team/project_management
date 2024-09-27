import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import Sidebar from './components/Sidebar';
import UserTable from './components/UserTable';
import ProjectTable from './components/ProjectTable';
import TaskTable from './components/TaskTable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/users" element={<UserTable />} />
              <Route path="/projects" element={<ProjectTable />} />
              <Route path="/tasks" element={<TaskTable />} />
              <Route path="/" element={<div className="text-xl">Select an option from the sidebar</div>} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
