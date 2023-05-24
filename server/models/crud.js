const mongoose = require("mongoose");

const crud = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  indentifier: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CrudOperations", crud);
