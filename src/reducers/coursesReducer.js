import {DELETE_COURSE,
        GET_LOCAL_COURSES,
        ADD_COURSE}
  from '../Actions/actionTypes';
// json for test:
import coursesTest from '../Containers/Courses/coursesTest';

const initialState = JSON.parse(coursesTest);
export default function (state = initialState, action) {
  switch(action.type) {

    case GET_LOCAL_COURSES: {
      return action.payload;      
    }

    case DELETE_COURSE: {
      const newState = state.filter((item) => 
        item.id !== action.payload);
      localStorage.setItem ("coursesStorage", JSON.stringify(newState));
      return newState;      
    }

    case ADD_COURSE: {      
      const newState = state.concat([action.payload]);
      // const newState = state.concat([{id: 6, name: action.payload.name, code: action.payload.code}]);
      // localStorage.setItem ("coursesStorage", JSON.stringify(newState));
      console.log(newState);
      return newState;      
    }

    default: return state;    
  }  
}