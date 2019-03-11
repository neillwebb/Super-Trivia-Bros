import React from 'react';
import Category from '../components/Category';
import Login from '../components/Login';
import '../App.css'
import * as $ from 'axios';

class GameWindow extends React.Component {
    state = {
        categories: ["Books", "Movies", "Sports", "Television", 'Celebrities', "Animals", "Geography", "History", "Video Games", "Science And Nature", "General Knowledge", "Music"],
        scoreList: this.props.allScores,
        score: 0
    }

    getCategories() {
        return this.state.categories.map((data, i) => (
            <Category key={i}
                name={data} />
        ))
    }

    render() {
        return (
            <div>
                {this.getCategories()}
                <header>
                    <h1>Super Trivia Bros!</h1>
                    <h2>Choose a category!</h2>
                </header>

            </div>
        )
    }

}

export default GameWindow;