import React from "react";
import Question from "../components/Question";
import AnswerOption from "../components/AnswerOption";
import { Link } from "react-router-dom";
import * as $ from "axios";

function shuffle(inputArr) {
  const arr = inputArr.concat();
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
    scoreList: [],
    difficultySelected: false,
    gameFinished: false,
    newHighScore: false,
    categoryScore: 0,
    answers: [],
    score: 0,
    buttonClicked: null,
    currAnswers: [],
    lives: 5,
    buttonDisabled: false
  };

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");
    $.get(`/api/user/${userId}`).then(data => {
      this.setState({
        username: data.data.username,
        scoreList: data.data.scores
      });
    });
  }

  diffcultyClick = (event) => {
    event.preventDefault();
    let temp = event.target.name;
    let numLives = 5;
    if (temp === "Easy") {
      numLives = 5;
    }
    else if (temp === "Medium") {
      numLives = 3;
    }
    else {
      numLives = 1;
    }
    const previousScore =
      this.state.scoreList.length > 0
        ? this.state.scoreList.find(
          item => item.category === this.state.category
        )
        : {};
    $.get(`/api/question/${this.state.category}`).then(data => {
      const tempAnswers = [];
      const tempQuestions = [];
      for (let i = 0; i < 10; i++) {
        tempAnswers[i] = data.data[i].incorrect_answers.concat(
          data.data[i].correct_answer
        );
        tempQuestions[i] = this.state.questionList.concat(
          data.data[i].question
        );
      }
      this.setState({
        difficulty: temp,
        difficultySelected: true,
        newHighScore: false,
        answerList: tempAnswers,
        questionList: tempQuestions,
        categoryScore: previousScore.score,
        score: 0,
        lives: numLives,
        currAnswers: this.getAnswers(tempAnswers, this.state.count)
      });
    });
  };


  disableButton = (event) => {
    event.preventDefault();
    this.setState({
      buttonDisabled: true,
      buttonClicked: event.target.value
    }, () => this.answerClick());
  }

  answerClick = () => {
    // event.preventDefault();
    // let buttonTarget = event.target;
    // buttonTarget.setAttribute("disabled", true);
    // setTimeout(() => { buttonTarget.removeAttribute("disabled"); }, 2000);

    // this.setState({
    //   buttonDisabled: true,
    //   buttonClicked: this.state.buttonClicked
    // });
    if (parseInt(this.state.buttonClicked) === 3) {
      this.setState({
        score: this.state.score + 10,
      }, this.nextQuestion);
    }
    else {
      this.setState({
        lives: this.state.lives - 1,
      }, this.nextQuestion);
    }
  }

  getQuestions() {
    return <Question name={this.state.questionList[this.state.count]} />;
  }

  getAnswers(ansList, counter) {
    const options = ["A", "B", "C", "D"];
    const currentAnswers = ansList[counter].map(
      (answer, i) => {
        const optionText = answer.toString ? answer.toString() : answer;
        return { text: optionText, id: i };
      }
    );
    let shuffledChoices = shuffle(currentAnswers);
    shuffledChoices.map((answer, i) => {
      answer.option = options[i];
      return answer;
    });
    return shuffledChoices;
  }


  enableButton = () => {
    this.setState({
      buttonDisabled: false
    });
  }

  nextQuestion() {
    setTimeout(() => {
      if (this.state.lives <= 0) {
        this.setState({
          gameFinished: true
        })
        if (this.state.score > this.state.categoryScore) {
          $.put('/api/user', { username: this.state.username, category: this.state.category, score: this.state.score }).then(data => {
            this.setState({
              newHighScore: true
            });
          });
        }
      }

      if (this.state.count < 9) {
        let tempcount = this.state.count + 1
        this.setState({
          count: tempcount,
          currAnswers: this.getAnswers(this.state.answerList, tempcount)
        });
      }
      else if (parseInt(this.state.count) === 9) {
        this.setState({
          gameFinished: true
        });
        if (this.state.score > this.state.categoryScore) {
          $.put('/api/user', { username: this.state.username, category: this.state.category, score: this.state.score }).then(data => {
            this.setState({
              newHighScore: true
            });
          });
        }
      }
      this.setState({ buttonClicked: null })
    }, 2000)
    setTimeout(this.enableButton, 2000)
  }

  render() {
    const shuffledChoices = this.state.currAnswers
    return (
      <div>
        {this.state.difficultySelected === false ? (
          <div>
            <h1 className="cat_class">
              {this.props.location.hash.substring(1)} Trivia{" "}
            </h1>
            <button className="easy" name="Easy" onClick={this.diffcultyClick}>
              &nbsp; Easy: <br /> 💖💖💖💖💖
            </button>
            <button
              className="medium"
              name="Medium"
              onClick={this.diffcultyClick}
            >
              &nbsp; Medium: <br /> 💖💖💖
            </button>
            <button className="hard" name="Hard" onClick={this.diffcultyClick}>
              &nbsp; Hard: <br /> 💖
            </button>
          </div>
        ) : this.state.gameFinished === false ? (
          <div>
            {this.getQuestions()}
            <div>
              <div className="currentScore">{this.state.score}</div>
              <div className="currentLives">{this.state.lives}💖</div>
              {shuffledChoices.map(choice => {
                return (
                  <AnswerOption
                    key={choice.option}
                    id={choice.id}
                    clickedButton={this.state.buttonClicked}
                    answerHandler={this.disableButton}
                    buttonOnOff={this.state.buttonDisabled}
                    option={choice.option}
                    name={choice.text}
                  />
                );
              })}
            </div>
          </div>
        ) :
            this.state.newHighScore === false ?
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
              :
              <div>
                <p className="gameOver">GAME OVER!</p>
                <div className="endScore">
                  Your score was:
                  {this.state.score}
                </div>
                <div className="newHigh">
                  New high score!</div>
                <Link className="menu" to="/gamewindow">
                  Back to Main Menu
          </Link>
              </div>
        }
      </div>
    );
  }
}



export default Trivia;