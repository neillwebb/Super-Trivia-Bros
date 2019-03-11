import React, { Component } from "react";
import Form from "../src/components/Form";
import GameWindow from "../src/components/GameWindow";
import "./App.css";
import * as $ from "axios";
import image from "../src/image.png";

class App extends Component {
  state = {
    username: "",
    password: "",
    reguser: "",
    regpw: "",
    category: [
      "Books",
      "Movies",
      "Sports",
      "Television",
      "Celebrities",
      "Animals",
      "Geography",
      "History",
      "VideoGames",
      "ScienceAndNature",
      "GeneralKnowledge",
      "Music"
    ],
    allScores: [],
    score: 0,
    isLoggedin: false,
    easterEgg: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    });
  };

  categoryClick = event => {
    event.preventDefault();
    this.setState({
      category: event.target.name
    });
  };

  handleRegister = event => {
    event.preventDefault();
    $.post("/api/user", {
      username: this.state.reguser,
      password: this.state.regpw
    })
      .then(data => {
        console.log(data);
      })
      .catch(function(err) {
        alert("Invalid username or password (Username might be taken)");
      });
  };

  handleLogin = event => {
    event.preventDefault();
    $.post("/api/session", {
      username: this.state.username,
      password: this.state.password
    })
      .then(data => {
        console.log(data);
        this.setState({
          isLoggedin: true,
          username: this.state.username,
          password: this.state.password,
          allScores: data.data.scores
        });
      })
      .catch(function(err) {
        alert("Username or password is incorrect");
      });
  };

  render() {
    return (
      <div>
        <img src={image} className="background" alt="background" />
        {this.state.isLoggedin === false ? (
          <Form
            onChangeHandler={this.handleChange}
            regHandler={this.handleRegister}
            loginHandler={this.handleLogin}
          />
        ) : (
          <GameWindow categories={this.state.category} />
        )}
      </div>
    );
  }
}

export default App;
