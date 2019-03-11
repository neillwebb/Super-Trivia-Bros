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
  scores: {
    type: Array,
    default: [
      {
        category: "Books",
        score: 0
      },
      {
        category: "Movies",
        score: 0
      },
      {
        category: "Sports",
        score: 0
      },
      {
        category: "Television",
        score: 0
      },
      {
        category: "Celebrities",
        score: 0
      },
      {
        category: "Animals",
        score: 0
      },
      {
        category: "Video Games",
        score: 0
      },
      {
        category: "Music",
        score: 0
      },
      {
        category: "Science And Nature",
        score: 0
      },
      {
        category: "General Knowledge",
        score: 0
      },
      {
        category: "History",
        score: 0
      },
      {
        category: "Geography",
        score: 0
      }
    ]
  }
});


// userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", UserSchema);

module.exports = User;
