import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => (
    <Link to={{
        pathname: "/trivia",
        hash: props.name
    }}>{props.name} </Link>
)

export default Category;