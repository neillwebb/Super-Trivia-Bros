import React from "react";

class AnswerOption extends React.Component {

  render() {
    let tempClass = "";
    if (this.props.clickedButton && this.props.id === 3) {
      tempClass = " buttonRight"
    }
    else if (parseInt(this.props.clickedButton) === this.props.id) {
      tempClass = " buttonWrong"
    }
    console.log(this.props.clickedButton)
    return (
      <div className="answer_div">
        <div>
          <button className={"answers" + this.props.option + tempClass} value={this.props.id} onClick={this.props.answerHandler}>
            {this.props.option}: {this.props.name}
          </button>
        </div>
        <button
          className={"ui button" + this.props.option + tempClass}
          value={this.props.id}
          onClick={this.props.answerHandler}>
        </button>
      </div>
    )
  }
}

export default AnswerOption;
