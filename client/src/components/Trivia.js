import React from "react";

import * as $ from "axios";

class Trivia extends React.Component {
  state = {
    category: this.props.location.hash.substring(1),
    difficulty: "",
    scoreList: this.props.allScores,
    difficultySelected: false,
    score: 0
  };

  diffcultyClick = event => {
    event.preventDefault();
    this.setState({
      difficultySelected: true,
      difficulty: event.target.name
    });

    $.get(`/api/question/${this.state.category}`).then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <div>
        <img class="ui avatar image" src="../../src/image.png" />
        <h1>{this.props.location.hash.substring(1)} Trivia </h1>
        <button className="easy" name="Easy" onClick={this.diffcultyClick}>
          Easy
        </button>
        <button className="medium" name="Medium" onClick={this.diffcultyClick}>
          Medium
        </button>
        <button className="hard" name="Hard" onClick={this.diffcultyClick}>
          Hard
        </button>
      </div>
    );
  }
}

export default Trivia;
