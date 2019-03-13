import React from "react";

const AnswerOption = (props) => (
  <div className="answer_div">
    <div>
      <button className={"answers" + props.option} value={props.id} onClick={props.answerHandler}>
        {props.option}: {props.name}
      </button>
    </div>
    <button
      className={"ui button" + props.option}
      value={props.id}
      onClick={props.answerHandler}>
    </button>
  </div>
);

export default AnswerOption;
