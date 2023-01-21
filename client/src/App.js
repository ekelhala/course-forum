import axios from 'axios';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Courses, Discussion, Threads } from './containers';

axios.defaults.baseURL = 'https://course-forum.herokuapp.com';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

class App extends React.Component {
  
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Courses/>}/>
                <Route path='/:courseId' element={<Threads/>}/>
                <Route path='/:courseId/:threadId' element={<Discussion/>}/>
            </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
