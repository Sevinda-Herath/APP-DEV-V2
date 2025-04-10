import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [teams, setTeams] = useState([]);
  const [newTeamName, setNewTeamName] = useState('');

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

  const fetchTeams = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/teams');
      setTeams(res.data);
    } catch (err) {
      console.error(err);
      setMessage('Error fetching teams');
    }
  };

  const createTeam = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/teams',
        { name: newTeamName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setTeams([...teams, res.data]);
      setNewTeamName('');
      setMessage('Team created successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to create team.');
    }
  };

  const joinTeam = async (teamId) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/teams/${teamId}/join`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setMessage('Joined team successfully!');
      fetchTeams(); // Refresh teams
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setMessage(`Failed to join team: ${err.response.data.error}`);
      } else {
        setMessage('Failed to join team. Please try again later.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
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
      console.error('Profile Update Error:', err);
      setMessage('Failed to update profile.');
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchTeams();
  }, []);

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
          <label className="block text-indigo-600 mb-1">Games</label>
          {[
            "callOfDuty4",
            "valorant",
            "rocketLeague",
            "freeFire",
            "pubg",
            "callOfDutyMobile",
            "mobileLegends",
            "mortalKombat"
          ].map((game) => (
            <div key={game} className="flex items-center mb-2">
              <input
                type="checkbox"
                name="games"
                value={game}
                checked={user.games?.includes(game) || false}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setUser((prev) => ({
                    ...prev,
                    games: isChecked
                      ? [...(prev.games || []), game]
                      : prev.games.filter((g) => g !== game)
                  }));
                }}
                className="mr-2"
              />
              <span className="text-indigo-600">{game}</span>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Update Profile
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-indigo-700">Teams</h3>

        {/* Create Team */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter team name"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            className="w-full p-2 border border-indigo-300 rounded mb-2"
          />
          <button
            onClick={createTeam}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
          >
            Create Team
          </button>
        </div>

        {/* List of Teams */}
        <div>
          {teams.map((team) => (
            <div key={team._id} className="mb-4 p-4 border rounded">
              <h4 className="text-lg font-bold">{team.name}</h4>
              <p className="text-sm text-gray-600">
                Members: {team.members.length}/5
              </p>
              {team.members.some((member) => member._id === user._id) ? (
                <p className="text-blue-600">You are already a member</p>
              ) : team.members.length < 5 ? (
                <button
                  onClick={() => joinTeam(team._id)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Join Team
                </button>
              ) : (
                <p className="text-red-600">Team is full</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}