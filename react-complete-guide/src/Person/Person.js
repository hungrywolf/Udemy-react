import React from 'react'
import cals from './Person.css';

const person = (props) => {
  return (
    <div className={cals.Person}>
    <p onClick={props.click}>I'm a {props.name}, I'm {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed}></input>
    </div>
  );
}

export default person;
