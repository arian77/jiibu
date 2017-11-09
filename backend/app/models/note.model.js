var mongoose = require("mongoose");

var NoteSchema = mongoose.Schema(
  {
    fullname: String,
    email: String,
    password: String,
    question: String,
    answer: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Note", NoteSchema);
