import React from 'react';
import Category from '../components/Category';

class GameWindow extends React.Component {
    state = {
        category: ''
    }
    gameStart = (event) => {
        event.preventDefault();
        this.setState({
            category: event.target.name
        })
    }

    getCategories() {
        return this.props.categories.map((data, i) => (
            <Category key={i} showGame={this.gameStart}
                name={data.category} />
        ))
    }

    render() {
        return (
            <div>
                {this.getCategories()}
                <h1>{this.state.category}</h1>
            </div>
        )
    }

}

export default GameWindow;