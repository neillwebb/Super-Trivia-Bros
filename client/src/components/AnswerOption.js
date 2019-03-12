import React from "react";

const AnswerOption = props => (
  <div className="answer_div">
    <ul>
      <p className="answers" value={props.id}>
        {props.option}: {props.name}
      </p>
    </ul>
    <button
      className={"class" + props.id}
      value={props.id}
      onClick={props.answerHandler}
    />
  </div>
);

export default AnswerOption;
