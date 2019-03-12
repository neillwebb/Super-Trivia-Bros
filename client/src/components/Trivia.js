import React from "react";
import Question from "../components/Question";
import AnswerOption from "../components/AnswerOption";
import { Link } from "react-router-dom";
import * as $ from "axios";

function shuffle(arr) {
  var currentIndex = arr.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

class Trivia extends React.Component {
  state = {
    username: "",
    category: this.props.location.hash.substring(1),
    difficulty: "",
    questionList: [],
    answerList: [],
    count: 0,
    scoreList: this.props.allScores,
    difficultySelected: false,
    gameFinished: false,
    score: 0
  };

  diffcultyClick = event => {
    event.preventDefault();
    let temp = event.target.name;
    $.get(`/api/question/${this.state.category}`).then(data => {
      console.log(data);
      const tempArray = [];
      const tempQuestions = [];
      for (let i = 0; i < 10; i++) {
        tempArray[i] = data.data[i].incorrect_answers.concat(
          data.data[i].correct_answer
        );
        tempQuestions[i] = this.state.questionList.concat(
          data.data[i].question
        );
      }
      this.setState({
        difficulty: temp,
        difficultySelected: true,
        answerList: tempArray,
        questionList: tempQuestions,
        score: 0
      });
    });
  };

  answerClick = event => {
    event.preventDefault();
    console.log(event.target.value);
    if (parseInt(event.target.value) === 3) {
      this.setState({
        score: this.state.score + 10
      });
    }
    this.nextQuestion();
  };

  getQuestions() {
    return <Question name={this.state.questionList[this.state.count]} />;
  }
  getAnswers() {
    const options = ["A", "B", "C", "D"];
    const currentAnswers = this.state.answerList[this.state.count].map(
      (answer, i) => {
        const optionText = answer.toString ? answer.toString() : answer;
        return { option: options[i], text: optionText, id: i };
      }
    );
    return shuffle(currentAnswers);
  }

  nextQuestion() {
    if (this.state.count < 9) {
      this.setState({
        count: this.state.count + 1
      });
    } else {
      this.setState({
        gameFinished: true
      });
    }
  }

  render() {
    const shuffledChoices = this.state.difficultySelected
      ? this.getAnswers()
      : [];
    return (
      <div>
        {this.state.difficultySelected === false ? (
          <div>
            <h1 className="cat_class">
              {this.props.location.hash.substring(1)} Trivia{" "}
            </h1>
            <button className="easy" name="Easy" onClick={this.diffcultyClick}>
              Easy
            </button>
            <button
              className="medium"
              name="Medium"
              onClick={this.diffcultyClick}
            >
              Medium
            </button>
            <button className="hard" name="Hard" onClick={this.diffcultyClick}>
              Hard
            </button>
          </div>
        ) : this.state.gameFinished === false ? (
          <div>
            {this.getQuestions()}
            <div>
              {shuffledChoices.map(choice => {
                return (
                  <AnswerOption
                    key={choice.id}
                    id={choice.id}
                    answerHandler={this.answerClick}
                    name={choice.text}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <p className="gameOver">GAME OVER!</p>
            <div className="endScore">
              Your score was:
              {this.state.score}
            </div>
            <Link className="menu" to="/gamewindow">
              Back to Main Menu
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Trivia;
