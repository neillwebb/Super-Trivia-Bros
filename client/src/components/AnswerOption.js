import React from "react";
const options = ["A", "B", "C", "D"];

const AnswerOption = props => (
  <div className="answer_div">
    <div>
      <p className={"answers" + props.option} value={props.id}>
        {props.option}: {props.name}
      </p>
    </div>
    <button
      // className={"ui button" + props.option}
      value={props.id}
      onClick={props.answerHandler}>{props.id}

    </button>

  </div>
);

export default AnswerOption;
