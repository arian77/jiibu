var mongoose = require("mongoose");
var DataSchema = mongoose.Schema(
  {
    fullname: String,
    email: String,
    password: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Data", DataSchema);
