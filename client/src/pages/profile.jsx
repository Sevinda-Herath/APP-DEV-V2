// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const fetchProfile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUser(res.data);
    } catch (err) {
      console.error(err);
      setMessage('Error fetching profile');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:5000/api/profile', user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUser(res.data);
      setMessage('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to update profile.');
    }
  };

  if (!user) return <div className="text-white p-4">Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Your Profile</h2>
      {message && <div className="text-sm mb-4 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit}>
        {[
          ['fname', 'First Name'],
          ['lname', 'Last Name'],
          ['email', 'Email'],
          ['mnumber', 'Mobile Number'],
          ['institutionType', 'Institution Type'],
          ['institutionName', 'Institution Name'],
          ['educationLevel', 'Education Level']
        ].map(([key, label]) => (
          <div key={key} className="mb-4">
            <label className="block text-indigo-600 mb-1">{label}</label>
            <input
              type="text"
              name={key}
              value={user[key] || ''}
              onChange={handleChange}
              className="w-full p-2 border border-indigo-300 rounded"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-indigo-600 mb-1">Games (comma-separated)</label>
          <input
            type="text"
            name="games"
            value={user.games?.join(', ') || ''}
            onChange={(e) =>
              setUser(prev => ({
                ...prev,
                games: e.target.value.split(',').map(game => game.trim())
              }))
            }
            className="w-full p-2 border border-indigo-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
