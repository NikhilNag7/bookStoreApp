import React from 'react'
import Home from './home/Home';
import Courses from './components/Courses';
import {Route,Routes} from "react-router-dom";
import Course from './courses/Course';
import Signup from './components/Signup';


function App() {
  return (
    <>

      <div className='dark:bg-slate-900 dark:text-white'>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
    
    </>
  )
}

export default App;
