import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/taskSlice';
import { RootState, AppDispatch } from '../app/store';
import api from '../api/api';
import { toast } from 'react-toastify';

const TaskTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tasks, status, error } = useSelector((state: RootState) => state.tasks);
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', assignedTo: '', status: 'new' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const handleAddTask = async () => {
    if (!newTask.title || !newTask.description || !newTask.dueDate || !newTask.assignedTo) {
      toast.error("All fields are required!");
      return;
    }

    try {
        const response = await api.post('/tasks', newTask);
        if (response.status === 201) {
            setNewTask({ title: '', description: '', dueDate: '', assignedTo: '', status: 'new' }); // Reset
            dispatch(fetchTasks()); // Refresh task list
            toast.success("Task added successfully!");
        } else {
            toast.error("Error adding task: " + response.data.message);
        }
    } catch (error: any) {
        toast.error("Error adding task: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Tasks</h2>
      {status === 'loading' && <div className="text-gray-500">Loading...</div>}
      {status === 'failed' && <div className="text-red-500">{error}</div>}
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={e => setNewTask({ ...newTask, title: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={e => setNewTask({ ...newTask, description: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <input
        type="date"
        value={newTask.dueDate}
        onChange={e => setNewTask({ ...newTask, dueDate: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <input
        type="text"
        placeholder="Assigned To"
        value={newTask.assignedTo}
        onChange={e => setNewTask({ ...newTask, assignedTo: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <select
        value={newTask.status}
        onChange={e => setNewTask({ ...newTask, status: e.target.value })}
        className="border p-2 rounded mr-2"
      >
        <option value="new">New</option>
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="discarded">Discarded</option>
      </select>
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">Add Task</button>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Due Date</th>
            <th className="border p-2">Assigned To</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td className="border p-2">{task.id}</td>
              <td className="border p-2">{task.title}</td>
              <td className="border p-2">{task.description}</td>
              <td className="border p-2">{new Date(task.dueDate).toLocaleDateString()}</td>
              <td className="border p-2">{task.assignedTo ? task.assignedTo.name : 'Unassigned'}</td>
              <td className="border p-2">{task.status}</td>
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

export default TaskTable;
