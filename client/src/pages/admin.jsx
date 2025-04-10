// src/pages/Admin.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const [usersRes, messagesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/admin/users', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('http://localhost:5000/api/admin/messages', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);
        setUsers(usersRes.data);
        setMessages(messagesRes.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load admin data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Admin Dashboard</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="mb-10">
        <h2 className="text-2xl text-pink-600 mb-3">All Users</h2>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-indigo-200">
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Email</th>
              <th className="px-3 py-2 border">Institution</th>
              <th className="px-3 py-2 border">Games</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="text-sm text-gray-700">
                <td className="px-3 py-2 border">{user.fname} {user.lname}</td>
                <td className="px-3 py-2 border">{user.email}</td>
                <td className="px-3 py-2 border">{user.institutionName}</td>
                <td className="px-3 py-2 border">{user.games?.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl text-pink-600 mb-3">Contact Messages</h2>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-indigo-200">
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Email</th>
              <th className="px-3 py-2 border">Message</th>
              <th className="px-3 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(msg => (
              <tr key={msg._id} className="text-sm text-gray-700">
                <td className="px-3 py-2 border">{msg.name}</td>
                <td className="px-3 py-2 border">{msg.email}</td>
                <td className="px-3 py-2 border">{msg.message}</td>
                <td className="px-3 py-2 border">{new Date(msg.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
