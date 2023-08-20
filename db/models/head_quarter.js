const mongoose = require('mongoose');

const headquarterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  forces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Force' }],
});

module.exports = mongoose.model('Headquarter', headquarterSchema);
