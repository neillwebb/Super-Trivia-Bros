import React from "react";

const AnswerOption = (props) => (

    <button value={props.id}
        onClick={props.answerHandler}
    >
        {props.name}

    </button>


)

export default AnswerOption;