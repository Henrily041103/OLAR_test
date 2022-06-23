var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userData = new Schema({
  username: {
    type: String,
    required: [true, 'Invalid username']
  },
  password: {
    type: String,
    required: [true, 'Invalid password']
  },
  type: {
    type: String,
    required: [true, 'Invalid type']
  }
});

module.exports = mongoose.model("user_data", userData);