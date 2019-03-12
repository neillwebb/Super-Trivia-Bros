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
    username: '',
    category: this.props.location.hash.substring(1),
    difficulty: "",
    questionList: [],
    answerList: [],
    count: 0,
    scoreList: [],
    difficultySelected: false,
    gameFinished: false,
    categoryScore: 0,
    score: 0
  };

  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    $.get(`/api/user/${userId}`).then((data) => {
      this.setState({
        username: data.data.username,
        scoreList: data.data.scores
      })
    })
  }

  diffcultyClick = event => {
    event.preventDefault();
    let temp = event.target.name;
    const previousScore = this.state.scoreList.find(item => item.category === this.state.category)

    $.get(`/api/question/${this.state.category}`).then(data => {
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
        categoryScore: previousScore.score,
        score: 0
      });
    });
  };

  answerClick = (event) => {
    event.preventDefault();
    if (parseInt(event.target.value) === 3) {
      this.setState({
        score: this.state.score + 10
      })
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
    console.log(currentAnswers);
    return shuffle(currentAnswers);

  }

  nextQuestion() {
    if (this.state.count < 9) {
      this.setState({
        count: this.state.count + 1
      });
    }
    else {
      this.setState({
        gameFinished: true
      });
      if (this.state.score > this.state.categoryScore) {
        $.put('/api/user', { username: this.state.username, category: this.state.category, score: this.state.score }).then(data => {
          console.log(data);
        })
      }
    }


  };


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
              <div className="currentScore">{this.state.score}</div>
              {shuffledChoices.map(choice => {
                return (
                  <AnswerOption
                    key={choice.id}
                    id={choice.id}
                    answerHandler={this.answerClick}
                    option={choice.option}
                    name={choice.text}
                  />
                );
              })}
            </div>
          </div>
        ) : (
              <div>
                <div>Your score was: {this.state.score}!</div>
                <Link to="/gamewindow">Back to Main Menu</Link>
              </div>
            )}
      </div>
    );
  }
}

export default Trivia;
