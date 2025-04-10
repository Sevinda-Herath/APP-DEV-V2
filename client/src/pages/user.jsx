import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setUserInfo(res.data);
        setFormData(res.data);
      })
      .catch(err => console.error('Error fetching user info:', err));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.put('http://localhost:5000/api/user', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setUserInfo(res.data);
      setIsEditing(false);
    })
    .catch(err => console.error('Error updating user info:', err));
  };

  return (
    <div className="container mx-auto p-8">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First Name"
            className="mb-4 p-2"
          />
          <input
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Last Name"
            className="mb-4 p-2"
          />
          {/* Other fields */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Info</button>
        </form>
      ) : (
        <div>
          <h1>{userInfo.fname} {userInfo.lname}</h1>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.mnumber}</p>
          {/* Display other fields */}
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white p-2 rounded">Edit Info</button>
        </div>
      )}
    </div>
  );
}
