const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const soldierSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  MiddleName: { type: String },
  LastName: { type: String },
  profileImage: { type: String },
  role: { type: String, enum: ['soldier', 'commander'], default: 'soldier' },
  forces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Force' }],
});

soldierSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

soldierSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Soldier = mongoose.model('Soldier', soldierSchema);

module.exports = Soldier;
