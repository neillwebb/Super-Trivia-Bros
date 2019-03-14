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
    return (
      <div className="answer_div">
        <div>
          <button
            type="submit"
            className={"answers" + this.props.option + tempClass}
            value={this.props.id}
            onClick={this.props.answerHandler}
            disabled={this.props.buttonOnOff}>
            {this.props.option}: {this.props.name}
          </button>
        </div>
        <button
          type="submit"
          className={"ui button" + this.props.option}
          value={this.props.id}
          onClick={this.props.answerHandler}
          disabled={this.props.buttonOnOff}>
        </button>
      </div>
    )
  }
}

export default AnswerOption;
