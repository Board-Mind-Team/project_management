import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';
import { RootState, AppDispatch } from '../app/store';
import api from '../api/api';
import { toast } from 'react-toastify';

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, status, error } = useSelector((state: RootState) => state.users);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error("All fields are required!");
      return;
    }
    
    if (!validateEmail(newUser.email)) {
      toast.error("Invalid email format!");
      return;
    }

    try {
        const response = await api.post('/users', newUser);
        if (response.status === 201) {
            setNewUser({ name: '', email: '', password: '' }); // Reset
            dispatch(fetchUsers()); // Refresh user list
            toast.success("User added successfully!");
        } else {
            toast.error("Error adding user: " + response.data.message);
        }
    } catch (error: any) {
        // Manejo del error para evitar que se muestre un error de Axios
        toast.error("Error adding user: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Users</h2>
      {status === 'loading' && <div className="text-gray-500">Loading...</div>}
      {status === 'failed' && <div className="text-red-500">{error}</div>}
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={e => setNewUser({ ...newUser, password: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleAddUser} className="bg-blue-500 text-white p-2 rounded">Add User</button>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
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

export default UserTable;
