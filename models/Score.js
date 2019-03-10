const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  category: {
    type: String,
    enum: ["Books", "Movies", "Sports", "Television", 'Celebrities', "Animals", "Geography", "History", "VideoGames", "ScienceAndNature", "GeneralKnowledge", "Music"]
  },
  score: {
    type: Number,
    default: 0
  }
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;
