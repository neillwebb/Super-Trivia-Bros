const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  cateogry: {
    type: String,
    trim: true
  },
  difficulty: {
    type: String,
    trim: true
  },
  question: {
    type: String,
    trim: true
  },
  correct_answer: {
    type: String,
    trim: true
  },
  incorrect_answers: [
    {
      type: Array,
      trim: true
    }
  ]
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
