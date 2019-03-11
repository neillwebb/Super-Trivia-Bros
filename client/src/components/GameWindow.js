import React from 'react';
import Category from '../components/Category';
import { Link } from 'react-router-dom';
import Trivia from '../components/Trivia';
import '../App.css'
import * as $ from 'axios';

class GameWindow extends React.Component {
    state = {
        categories: ["Books", "Movies", "Sports", "Television", 'Celebrities', "Animals", "Geography", "History", "Video Games", "Science And Nature", "General Knowledge", "Music"],
        selectedCategory: '',
        difficulty: '',
        scoreList: this.props.allScores,
        difficultySelected: false,
        categorySelected: false,
        score: 0
    }
    gameStart = (event) => {
        event.preventDefault();
        this.setState({
            categorySelected: true,
            selectedCategory: event.target.name
        })
    }


    renderTrivia() {
        console.log("hello");
        return <Trivia diff={this.state.difficulty} />

    }

    pullTrivia = (event) => {
        event.preventDefault();
        $.get(`/api/question/${this.state.selectedCategory}`).then((data) => {
            console.log(data)
            { this.renderTrivia() };

        })

    }

    getCategories() {
        return this.state.categories.map((data, i) => (
            <Category key={i} showGame={this.gameStart}
                name={data} />
        ))
    }

    render() {
        return (
            <div>
                {this.getCategories()}
                {this.state.categorySelected === false ?
                    <header>
                        <h1>Super Trivia Bros!</h1>
                        <h2>Choose a category!</h2>
                    </header>
                    :
                    <div>
                        <h1>Super Trivia Bros!</h1>
                        <h1> {this.state.category}</h1>


                    </div>
                }
            </div>
        )
    }

}

export default GameWindow;