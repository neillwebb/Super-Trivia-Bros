import React from "react";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import "../App.css";
import * as $ from "axios";

class GameWindow extends React.Component {
  state = {
    username: "",
    categories: [
      "Books",
      "Movies",
      "Sports",
      "Television",
      "Celebrities",
      "Animals",
      "Geography",
      "History",
      "Video Games",
      "Science And Nature",
      "General Knowledge",
      "Music"
    ],
    scoreList: [],
    easterEgg: [],
    score: 0
  };

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");
    $.get(`/api/user/${userId}`).then(data => {
      this.setState({
        username: data.data.username,
        scoreList: data.data.scores,
        easterEgg: data.data.easterEgg
      });
    });
  }

  getCategories() {
    return this.state.categories.map((data, i) => (
      <Category key={i} name={data} />
    ));
  }

  render() {
    return (
      <div className="categories">
        <header>
          <h1>Super Trivia Bros!</h1>
          <h2>Choose a category:</h2>
          <h3>
            <Link className="userProfile" to="/highscore">
              <img className="imageLink" src="../src/image.png" />
            </Link>
          </h3>
        </header>
        {this.getCategories()}
      </div>
    );
  }
}

export default GameWindow;
