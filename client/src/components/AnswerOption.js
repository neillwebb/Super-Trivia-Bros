import React from "react";

const AnswerOption = props => (
  <div className="answer_div">
<<<<<<< HEAD
    <ul>
      <p className="answers" value={props.id}>
        {props.option}: {props.name}
      </p>
    </ul>
    <button
      className={"class" + props.id}
=======
    <div>
      <ul>
        <p className={"answers" + props.id} value={props.id}>
          {props.name}
        </p>
      </ul>
    </div>
    <button
      className={"ui button" + props.id}
>>>>>>> 5e27ef3f245afe4e9ef9e7dacf4280f99ff4e980
      value={props.id}
      onClick={props.answerHandler}
    />
  </div>
);

export default AnswerOption;
