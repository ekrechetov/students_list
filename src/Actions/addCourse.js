import {ADD_COURSE} from './actionTypes';

const addCourse = (value) => {
  return {
    type: ADD_COURSE,
    payload: value
  }
}
export default addCourse;