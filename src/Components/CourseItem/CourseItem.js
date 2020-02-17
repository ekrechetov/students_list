import React from 'react';
import {connect} from 'react-redux';
import deleteFromStore from '../../Actions/deleteFromStore';
import {DELETE_COURSE} from '../../Actions/actionTypes';
import remove from '../../Images/remove.png';
import edit from '../../Images/edit.png';
import './courseItem.scss';

const CourseItem = (props) => {
  const {id, name, code} = props.elem;
  const deleteElem = () => {
    props.dispatch(deleteFromStore(DELETE_COURSE, id));
    let newRow = document.querySelectorAll('.course-item:last-child li');
    newRow.forEach(elem => {
      console.log(elem);
      if(elem.classList.contains('active')) {
        elem.classList.remove('active');
      }
    });    
  }
  return(
    <li className="course-item">
      <ul className="course-item-list">
        <li className="course-item-list-col">{name}</li>
        <li className="course-item-list-col">{code}</li>
        <li className="course-item-list-col">
          <img src={edit} className="course-item-list-col-img" alt="Edit"/>
          <img src={remove} onClick={deleteElem} className="course-item-list-col-img" alt="Remove"/>
        </li>
      </ul>           
    </li>
  )
}
const mapStoreToProps = (store) => (
  {courses: store.coursesReducer}
)
export default connect(mapStoreToProps)(CourseItem);