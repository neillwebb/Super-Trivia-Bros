import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => (
  <Link
    className={props.name}
    to={{
      pathname: "/trivia",
      hash: props.name
    }}
  >
    {props.name}{" "}
  </Link>
);


export default Category;
