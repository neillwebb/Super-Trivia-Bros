import React from "react";

const AnswerOption = props => (
  <div className="answer_div">
    <div>
      <ul>
        <p className={"answers" + props.id} value={props.id}>
          {props.name}
        </p>
      </ul>
    </div>
    <button
      className={"ui button" + props.id}
      value={props.id}
      onClick={props.answerHandler}
    />
  </div>
);

export default AnswerOption;
