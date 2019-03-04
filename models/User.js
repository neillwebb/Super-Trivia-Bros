const mongoose = require("mongoose");
// var uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  easterEgg: {
    type: Boolean,
    default: false
  },
  scores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Score"
    }
  ]
});

// userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", UserSchema);

module.exports = User;
