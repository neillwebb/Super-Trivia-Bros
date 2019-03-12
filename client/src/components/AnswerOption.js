import React from "react";

const AnswerOption = props => (
  <div className="answer_div">
    <div>
      <ul>
        <p className="answers" value={props.id}>
          {props.name}
        </p>
      </ul>
    </div>
    <button
      className="answer_buttons"
      value={props.id}
      onClick={props.answerHandler}
    />
  </div>
);

export default AnswerOption;
