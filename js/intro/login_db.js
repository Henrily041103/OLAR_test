const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://OLAR:tjbBEvrL6FQnHGoy@cluster0.qvu4zq4.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB);


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
var model = mongoose.model("user_data", userData);

class account_lookup {

    constructor() {}

    async findAllUsers() {
        model.find().lean().exec((err, users) => {
            return users;
          })
    }
    async findByUser(u, p) {
        model.find({username: u, password: p}).lean().exec((err, users) => {
            return users;
          })
    }
}

module.exports = account_lookup;