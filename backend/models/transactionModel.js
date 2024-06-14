const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    accountId: { type: Schema.Types.ObjectId, ref: 'FinancialAccount', required: true },
    type: { type: String, required: true, enum: ['Income', 'Expense', 'Transfer'] },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Transaction', transactionSchema);
  