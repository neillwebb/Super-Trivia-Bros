import React from "react";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import "../App.css";
import PersonalHighScore from "./PersonalHighScore";
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
    easterEgg: false,
    score: 0
  };

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");
    $.get(`/api/user/${userId}`).then(data => {
      console.log(data);
      this.setState({
        username: data.data.username,
        scoreList: data.data.scores
      });
    });
  }

  // componentWillReceiveProps(prevProps) {
  //   console.log(this.props)
  //   console.log(prevProps)
  //   if (this.props.scores !== prevProps.scores) {
  //     console.log(this.props.scores)
  //     this.setState({
  //       scoreList: this.props.scores
  //     })
  //   }
  // }

  getCategories() {
    return this.state.categories.map((data, i) => (
      <Category key={i} name={data} />
    ));
  }

  render() {
    console.log(this.state.scoreList);
    return (
      <div className="categories">
        <header>
          <h1>Super Trivia Bros!</h1>
          <h2>Choose a category:</h2>
          <h3>
            <Link className="userProfile" to="/highscore" />
          </h3>
        </header>
        {this.getCategories()}
      </div>
    );
  }
}

export default GameWindow;
