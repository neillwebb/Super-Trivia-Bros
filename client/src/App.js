import React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from '../src/components/Login';
import Trivia from '../src/components/Trivia';
import GameWindow from '../src/components/GameWindow';
import "./App.css";
import image from "../src/image.png"

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <img src={image} className="background" alt="background" />
      </header>
      <Route exact path='/' component={Login} />
      <Route exact path='/gamewindow' component={GameWindow} />
      <Route exact path='/trivia' component={Trivia} />
    </div>
  </BrowserRouter >
)

export default App;
