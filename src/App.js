import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Courses from './Containers/Courses/Courses';
import Students from './Containers/Students/Students';
import Home from './Containers/Home/Home';

function App() {
  return (
      <BrowserRouter>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/courses'} component={Courses}/>
        <Route path={'/students'} component={Students}/>
      </BrowserRouter>
  )
}
export default App;