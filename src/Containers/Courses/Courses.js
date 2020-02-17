import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import Form from '../../Components/Form/Form';
import CourseItem from '../../Components/CourseItem/CourseItem';
import getLocalData from '../../Actions/getLocalData';
import addCourse from '../../Actions/addCourse';
import {GET_LOCAL_COURSES} from '../../Actions/actionTypes';
import './courses.scss';

const Courses = ({courses, dispatch}) => {
  useEffect(() => {  
    let coursesList = JSON.parse(localStorage.getItem ("coursesStorage"));
    if(coursesList != null) {
      dispatch(getLocalData(GET_LOCAL_COURSES, coursesList));
    }
  }, []);  

  const [isAddRow, setIsAddRow] = useState(false);

  useEffect(() => { 
    if(isAddRow) {
      let newRow = document.querySelectorAll('.course-item:last-child li');
      newRow.forEach(elem => {
        elem.classList.add('active');
        elem.setAttribute('contenteditable', true);

        elem.onblur = (e) => {
          let error = document.getElementById('error');
          if(!elem.innerHTML) {
            error.innerHTML = "Required fields!";
            e.target.style.borderColor = 'red';
          } else {
            elem.setAttribute('contenteditable', false);
            e.target.style.borderColor = 'gray';
            error.innerHTML = '';
          }
          if(newRow[0].innerHTML && newRow[1].innerHTML) {
            newRow.forEach(elem => {
              elem.classList.remove('active');
            });
          }
        };

        elem.onkeydown = (e) => {
          if( e.keyCode === 13 ) {
            e.preventDefault();
          }
        };
      });
      newRow[newRow.length - 1].setAttribute('contenteditable', false);    
      newRow[0].focus();
    } else return;
  });

  const showForm = (e) => {
    if(e.target.className === 'courses-add') {
      // let modal = document.querySelector('.courses-add-modal');
      // modal.classList.toggle('active');
      let keys = courses.map((item) => {
        return item.id
      });
      setIsAddRow(!isAddRow);
      dispatch(addCourse({id: Math.max.apply(null, keys) + 1}));
    } else return;
  }
  return(
    <>
      <Header />
      <section>
        <div className="courses-container">
          <div onClick={showForm} className="courses-add">
            Add course
            <div className="courses-add-modal">              
              <Form />                         
            </div>            
          </div>
          <h2 className="courses-title">Courses</h2>
          <Search />
        </div>
      </section>
      <section>
        <ul className="table-header">
          <li className="table-header-col">Name</li>
          <li className="table-header-col">Code</li>
          <li className="table-header-col"></li>
        </ul>
        <ul>
          {courses.map(item => {
              return <CourseItem key={item.id} elem={item}/>
            })        
          }
        </ul>
        <span id="error"></span> 
      </section>
    </>
  )
}
const mapStoreToProps = (store) => (
  {courses: store.courses}
);
export default connect(mapStoreToProps)(Courses);