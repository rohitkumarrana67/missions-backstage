const mongoose = require('mongoose');

const forceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  headquarter: { type: mongoose.Schema.Types.ObjectId, ref: 'Headquarter' },
  soldiers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Soldier' }],
});

module.exports = mongoose.model('Force', forceSchema);
