const mongoose = require('mongoose');
const { Schema } = mongoose;

const financialAccountSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    accountType: { type: String, required: true, enum: ['Savings', 'Checking', 'Investment', 'Venmo'] },
    institution: { type: String, required: true },
    accountNumber: { type: String, required: true },
    balance: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('FinancialAccount', financialAccountSchema);
  