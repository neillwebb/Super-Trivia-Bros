import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

class PersonalHighScore extends React.Component {
  state = {
    scoreList: this.props.scores
  }

  render() {
    return (
      <div>
        <h1> Personal High Scores! </h1>
        <ul>
          <li className="highScoreCategory" id="highScoreBooks">Books:</li>
          <li className="highScoreCategory" id="highScoreMovies">Movies:</li>
          <li className="highScoreCategory" id="highScoreSports">Sports:</li>
          <li className="highScoreCategory" id="highScoreTelevision">Television:</li>
          <li className="highScoreCategory" id="highScoreVideoGames">Video Games:</li>
          <li className="highScoreCategory" id="highScoreMusic">Music:</li>
          <li className="highScoreCategory" id="highScoreScienceNature">Science and Nature:</li>
          <li className="highScoreCategory" id="highScoreGeneralKnowledge">General Knowledge:</li>
          <li className="highScoreCategory" id="highScoreHistory">History:</li>
          <li className="highScoreCategory" id="highScoreGeography">Geography:</li>
          <li className="highScoreCategory" id="highScoreCelebrities">Celebrities:</li>
          <li className="highScoreCategory" id="highScoreAnimals">Animals:</li>
          <li><Link to="/gamewindow">Main Menu</Link></li>
        </ul>
      </div>
    )
  }
}

export default PersonalHighScore;
