import React from 'react';

const Category = (props) => (
    <button name={props.name} onClick={props.showGame}>{props.name}</button>
)

export default Category;