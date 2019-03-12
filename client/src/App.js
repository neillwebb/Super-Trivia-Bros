import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../src/components/Login";
import Trivia from "../src/components/Trivia";
import PersonalHighScore from "../src/components/PersonalHighScore";
import GameWindow from "../src/components/GameWindow";
import "./App.css";
import image from "../src/Final.png";
import Music from "./components/Audio";

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <img src={image} className="background" alt="background" />
      </header>
      <Route exact path="/" component={Login} />
      <Route exact path="/gamewindow" component={GameWindow} />
      <Route exact path="/highscore" component={PersonalHighScore} />
      <Route exact path="/trivia" component={Trivia} />
      <Music />
    </div>
  </BrowserRouter>
);

export default App;
