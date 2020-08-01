const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    //type而不是typres，导致错误
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
//what are the two arguments stand for in the function?
//The first one is collection name, second one is schema name.
module.exports = mongoose.model('user', UserSchema);
