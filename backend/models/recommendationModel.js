const mongoose = require('mongoose');
const { Schema } = mongoose;

const recommendationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recommendation: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Recommendation', recommendationSchema);
  