import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import * as $ from 'axios';

class PersonalHighScore extends React.Component {
  state = {
    scoreList: []
  }

  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    $.get(`/api/user/${userId}`).then((data) => {
      console.log(data)
      this.setState({
        username: data.data.username,
        scoreList: data.data.scores,
        easterEgg: data.data.easterEgg
      })
    })
  }

  render() {
    return (
      this.state.scoreList.length > 0 && (
        <div>
          <h1> Personal High Scores! </h1>
          <ul>
            {this.state.scoreList.map((data, i) => (
              <li key={i}>{data.category}: {data.score}</li>
            ))}
            <Link to="/gamewindow">Main Menu</Link>
          </ul>
        </div>
      )
    )
  }
}

export default PersonalHighScore;
