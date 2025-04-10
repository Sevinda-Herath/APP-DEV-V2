const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const Team = require('../models/Team');

// Fetch all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find().populate('members', 'fname lname');
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

// Create a new team
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;
    const team = new Team({ name, members: [req.user.id] });
    await team.save();
    res.json(team);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create team' });
  }
});

// Join a team
router.post('/:teamId/join', authMiddleware, async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (!team) return res.status(404).json({ error: 'Team not found' });

    if (team.members.length >= 5)
      return res.status(400).json({ error: 'Team is full' });

    if (team.members.includes(req.user.id))
      return res.status(400).json({ error: 'Already a member of this team' });

    team.members.push(req.user.id);
    await team.save();
    res.json(team);
  } catch (err) {
    res.status(500).json({ error: 'Failed to join team' });
  }
});

// Leave a team
router.post('/:teamId/leave', authMiddleware, async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (!team) return res.status(404).json({ error: 'Team not found' });

    if (!team.members.includes(req.user.id))
      return res.status(400).json({ error: 'You are not a member of this team' });

    team.members = team.members.filter(member => member.toString() !== req.user.id);
    await team.save();
    res.json({ message: 'Successfully left the team' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to leave team' });
  }
});

module.exports = router;