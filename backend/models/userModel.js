const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
    dob: Date,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipcode: String
    },
    contact: {
      phone: String,
      socialMedia: String
    }
  }
});

module.exports = mongoose.model('User', userSchema);
