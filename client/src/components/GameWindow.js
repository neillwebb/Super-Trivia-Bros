import React from 'react';
import Category from '../components/Category';
import { Link } from "react-router-dom";
import '../App.css'
import PersonalHighScore from './PersonalHighScore';

class GameWindow extends React.Component {
  state = {
    categories: [
      "Books",
      "Movies",
      "Sports",
      "Television",
      'Celebrities',
      "Animals",
      "Geography",
      "History",
      "Video Games",
      "Science And Nature",
      "General Knowledge",
      "Music"
    ],
    scoreList: this.props.scores,
    score: 0
  }

  // componentDidMount() {
  //   this.setState({
  //     scoreList: this.props.scores
  //   })
  //   console.log(this.state.scoreList)
  // }

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
      <Category key={i}
        name={data} />
    ))
  }

  render() {
    console.log(this.state.scoreList)
    return (
      <div className="categories">
        <header>
          <h1>Super Trivia Bros!</h1>
          <h2>Choose a category:</h2>
          <h3><Link to="/highscore">Your high scores!</Link></h3>
        </header>
        {this.getCategories()}
      </div>
    );
  }
}

export default GameWindow;
