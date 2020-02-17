import React from 'react';
import './input.scss';

const Input = (props) => {
  const changeValue = (e) => {
    props.onChange(e.target.name, e.target.value);
  }
  return(
    <label className="input">
      {props.title}
      <input onChange={changeValue} type="text" name={props.name}/>
    </label>
  )
}
export default Input;