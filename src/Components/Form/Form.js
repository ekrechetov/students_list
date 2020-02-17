import React, {useState} from 'react';
import {connect} from 'react-redux';
import Input from '../Input/Input';
import addCourse from '../../Actions/addCourse';
import './form.scss';

const Form = (props) => {  
  // const [newName, setNewName] = useState('');
  // const [newCode, setNewCode] = useState('');
  const [newCourse, setNewCourse] = useState({});

  const getNewCourse = (name, value) => {
    if(name === 'name') setNewCourse(Object.assign(newCourse, {name: value}));
    // if(name === 'name') setNewName(value);
    if(name === 'code') setNewCourse(Object.assign(newCourse, {code: value}));
    // if(name === 'code') setNewCode(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();    
    props.dispatch(addCourse(newCourse));

    let modal = document.querySelector('.courses-add-modal');
    modal.classList.toggle('active');

    let inputs = document.querySelectorAll('.input input');
    inputs.forEach(elem => {
      elem.value = '';
    }); 
  }
  return(
    <form onSubmit={onSubmit} className="form">
      <Input onChange={getNewCourse} name="name" title="Course name: " />
      <Input onChange={getNewCourse} name="code" title="Course code : " />
      <button type="submit" className="submit">Add</button>
    </form>
  )
}
const mapStoreToProps = (store) => (
  {courses: store.courses}
);
export default connect(mapStoreToProps)(Form);