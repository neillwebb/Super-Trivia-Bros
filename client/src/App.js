import React, { Component } from "react";
import Form from '../src/components/Form';
import InGame from '../src/components/InGame';
import "./App.css";
import * as $ from 'axios';

class App extends Component {
  state = {
    username: '',
    password: '',
    reguser: '',
    regpw: '',
    category: '',
    previousScore: [
      {
        category: "Books",
        highScore: 0
      },
      {
        category: "Movies",
        highScore: 0
      },
      {
        category: "Sports",
        highScore: 0
      },
      {
        category: "Television",
        highScore: 0
      },
      {
        category: "Celebrities",
        highScore: 0
      },
      {
        category: "Animals",
        highScore: 0
      },
      {
        category: "VideoGames",
        highScore: 0
      },
      {
        category: "Music",
        highScore: 0
      },
      {
        category: "ScienceAndNature",
        highScore: 0
      },
      {
        category: "GeneralKnowledge",
        highScore: 0
      },
      {
        category: "History",
        highScore: 0
      },
      {
        category: "Geography",
        highScore: 0
      },
    ],
    score: 0,
    isLoggedin: false,
    easterEgg: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRegister = (event) => {
    event.preventDefault();
    $.post('/api/user', { username: this.state.reguser, password: this.state.regpw })
      .then((data) => {
        console.log(data)
      }).catch(function (err) {
        console.log(err)
      })
  }

  handleLogin = (event) => {
    event.preventDefault();
    $.post('/api/session', { username: this.state.username, password: this.state.password })
      .then((data) => {
        console.log(data)
      }).catch(function (err) {
        alert("Username or password is incorrect")
      })
    this.setState({
      isLoggedin: true,
      username: this.state.username,
      password: this.state.password
    })
  }

  render() {
    return (
      <div>
        {this.state.isLoggedin === false ?
          <Form onChangeHandler={this.handleChange}
            regHandler={this.handleRegister}
            loginHandler={this.handleLogin} /> :
          <InGame />
        }
      </div>
    );
  }
}

export default App;
