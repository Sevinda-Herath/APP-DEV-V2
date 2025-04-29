const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcrypt

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true 
  },
  mnumber: String,
  institutionType: String,
  institutionName: String,
  educationLevel: String,
  games: [String],
  password: { type: String, required: true },
});

// Pre-save middleware to hash the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next(); // Only hash if password is new or modified
  }

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash password
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
