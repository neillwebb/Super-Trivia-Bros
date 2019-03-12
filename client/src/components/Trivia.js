import React from 'react';
import Question from '../components/Question';
import AnswerOption from '../components/AnswerOption';
import * as $ from 'axios';

class Trivia extends React.Component {
    state = {
        category: this.props.location.hash.substring(1),
        difficulty: '',
        questionList: [],
        answerList: [],
        count: 0,
        answerCount: 0,
        scoreList: this.props.allScores,
        difficultySelected: false,
        gameFinished: false,
        score: 0
    }

    diffcultyClick = (event) => {
        event.preventDefault();
        let temp = event.target.name;
        // this.setState({
        //     questionList: [],
        //     answerList: []
        // })
        $.get(`/api/question/${this.state.category}`).then((data) => {
            console.log(data);
            const tempArray = [];
            for (let i = 0; i < 10; i++) {
                tempArray[i] = (data.data[i].incorrect_answers).concat(data.data[i].correct_answer)
                this.setState({
                    difficulty: temp,
                    difficultySelected: true,
                    questionList: this.state.questionList.concat(data.data[i].question),
                })
            }
            this.setState({
                answerList: tempArray
            })
            console.log(tempArray);

        })
    };

    getQuestions() {
        return <Question name={this.state.questionList[this.state.count]} />

    }
    getAnswers() {
        return <AnswerOption name={this.state.answerList[this.state.count]} />

        // return (this.state.answerList[this.state.count]).map((data, i) => (
        //     <AnswerOption key={i}
        //         name={data} />
        // ))
    }

    nextQuestion = (event) => {
        event.preventDefault();
        if (this.state.count < 9) {
            this.setState({
                count: this.state.count + 1,
                answerCount: this.state.answerCount + 1
            })
        }
        else {
            this.setState({
                gameFinished: true
            })
        }
    }


    render() {
        return (
            < div >
                {
                    this.state.difficultySelected === false ?
                        <div>
                            <h1>{this.props.location.hash.substring(1)} Trivia </h1>
                            <button name="Easy" onClick={this.diffcultyClick}>Easy</button>
                            <button name="Medium" onClick={this.diffcultyClick}>Medium</button>
                            <button name="Hard" onClick={this.diffcultyClick}>Hard</button>
                        </div > :

                        this.state.gameFinished === false ?
                            <div>
                                {this.getQuestions()}
                                {this.getAnswers()}
                                <button name="next" onClick={this.nextQuestion}>Next</button>
                            </div> :
                            <div>Your score was: </div>


                }
            </div>
        )
    }
}

export default Trivia;
