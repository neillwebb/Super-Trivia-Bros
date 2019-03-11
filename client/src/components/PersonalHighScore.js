import React from "react";

const PersonalHighScore = props => (
  <div>
    <h1> Personal High Scores! </h1>
    <p>
      <ul>
        <li class="highScoreCategory" id="highScoreBooks">Books:</li>
        <li class="highScoreCategory" id="highScoreMovies">Movies:</li>
        <li class="highScoreCategory" id="highScoreSports">Sports:</li>
        <li class="highScoreCategory" id="highScoreTelevision">Television:</li>
        <li class="highScoreCategory" id="highScoreVideoGames">Video Games:</li>
        <li class="highScoreCategory" id="highScoreMusic">Music:</li>
        <li class="highScoreCategory" id="highScoreScienceNature">Science and Nature:</li>
        <li class="highScoreCategory" id="highScoreGeneralKnowledge">General Knowledge:</li>
        <li class="highScoreCategory" id="highScoreHistory">History:</li>
        <li class="highScoreCategory" id="highScoreGeography">Geography:</li>
        <li class="highScoreCategory" id="highScoreCelebrities">Celebrities:</li>
        <li class="highScoreCategory" id="highScoreAnimals">Animals:</li>
      </ul>
    </p>
  </div>
)
export default PersonalHighScore;
