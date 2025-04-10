const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, required: true, unique: true },
  mnumber: String,
  institutionType: String,
  institutionName: String,
  educationLevel: String,
  games: [String],
  password: { type: String, required: true },
});

// 🔐 Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// 🔍 Optional: hash password if changed during update (findOneAndUpdate doesn't trigger `pre('save')`)
// You can handle this in your route if needed — ask me if you want help with that

// ✅ Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
