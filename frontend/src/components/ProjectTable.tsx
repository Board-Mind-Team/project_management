import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../features/projects/projectSlice';
import { RootState, AppDispatch } from '../app/store';
import api from '../api/api';
import { toast } from 'react-toastify';

const ProjectTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { projects, status, error } = useSelector((state: RootState) => state.projects);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  const handleAddProject = async () => {
    if (!newProject.name || !newProject.description) {
      toast.error("All fields are required!");
      return;
    }

    try {
        const response = await api.post('/projects', newProject);
        if (response.status === 201) {
            setNewProject({ name: '', description: '' }); // Reset
            dispatch(fetchProjects()); // Refresh project list
            toast.success("Project added successfully!");
        } else {
            toast.error("Error adding project: " + response.data.message);
        }
    } catch (error: any) {
        toast.error("Error adding project: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      {status === 'loading' && <div className="text-gray-500">Loading...</div>}
      {status === 'failed' && <div className="text-red-500">{error}</div>}
      <input
        type="text"
        placeholder="Project Name"
        value={newProject.name}
        onChange={e => setNewProject({ ...newProject, name: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={newProject.description}
        onChange={e => setNewProject({ ...newProject, description: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleAddProject} className="bg-blue-500 text-white p-2 rounded">Add Project</button>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td className="border p-2">{project.id}</td>
              <td className="border p-2">{project.name}</td>
              <td className="border p-2">{project.description}</td>
              <td className="border p-2">
                <button className="bg-red-500 text-white p-1 rounded" onClick={() => {/* handle delete */}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
