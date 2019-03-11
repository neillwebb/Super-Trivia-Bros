import React from 'react';
import Category from '../components/Category';

import * as $ from 'axios';

class GameWindow extends React.Component {
    state = {
        category: '',
        difficulty: '',
        categorySelected: false,
        score: 0
    }
    gameStart = (event) => {
        event.preventDefault();
        this.setState({
            categorySelected: true,
            category: event.target.name
        })
    }

    diffcultyClick = (event) => {
        event.preventDefault();
        this.setState({
            difficulty: event.target.name
        })
    }

    pullTrivia = (event) => {
        event.preventDefault();
        $.get(`/api/question/${this.state.category}`).then((data) => {
            console.log(data)
        })
    }

    getCategories() {
        return this.props.categories.map((data, i) => (
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
                        <button name="Easy" onClick={this.diffcultyClick}>Easy</button>
                        <button name="Medium" onClick={this.diffcultyClick}>Medium</button>
                        <button name="Hard" onClick={this.diffcultyClick}>Hard</button>
                        <button onClick={this.pullTrivia}>Start game!</button>

                    </div>
                }
            </div>
        )
    }

}

export default GameWindow;