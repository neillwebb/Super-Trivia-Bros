const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  Books: {
    type: Number
  },
  Movies: {
    type: Number
  },
  Sports: {
    type: Number
  },
  Television: {
    type: Number
  },
  Celebrities: {
    type: Number
  },
  Animals: {
    type: Number
  },
  VideoGames: {
    type: Number
  },
  Music: {
    type: Number
  },
  ScienceAndNature: {
    type: Number
  },
  GeneralKnowledge: {
    type: Number
  },
  History: {
    type: Number
  },
  Geography: {
    type: Number
  }
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;
