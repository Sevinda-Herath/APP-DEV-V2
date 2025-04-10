const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true, 
    unique: true // Ensure team names are unique
  },
  members: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  createdAt: { 
    type: Date, 
    default: Date.now // Automatically track when the team was created
  }
});

// Add a method to check if a user is already a member
teamSchema.methods.isMember = function(userId) {
  return this.members.includes(userId);
};

module.exports = mongoose.model('Team', teamSchema);