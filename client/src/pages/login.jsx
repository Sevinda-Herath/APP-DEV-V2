import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import esportlogo from "../assets/Untitled.jpeg";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', credentials);
      localStorage.setItem('token', res.data.token);
      navigate('/profile');
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src={esportlogo} alt="Esport Logo" />
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          {errorMessage && <div className="text-red-500 text-sm mb-3">{errorMessage}</div>}
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <footer>
          <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
          <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
        </footer>
      </div>
    </div>
  );
}