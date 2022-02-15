import { useState } from 'react'
import './App.css'

import {BsGithub} from "react-icons/bs/";
import {BsTwitter} from "react-icons/bs/";
import {FaLinkedin} from "react-icons/fa/";
import {GrMail} from "react-icons/gr/";
import First from './components/First';
import Exp from './components/Exp';
import Project from './components/Project';
import Education from './components/Education';
function App() {
  
  return (
<div>
    <div className="App">
    <div className="dis">
     <div className='written'>
       <div className="upper">
       <h2>Hi , I'm Devyank 👋</h2>
       <p>I'm a Frontend Developer , having an experience of working with react & Vue Always eager to  
         learn new Skills , aspiring Full Stack Developer</p>
       </div>
      <div className="below">
        <div className='icon'>

        <a href="https://github.com/2devyank"><BsGithub style={{height:"40px",width:"40px"}}/></a>
        <a href="https://www.linkedin.com/in/devyank-nagpal-58564a204/"><FaLinkedin style={{height:"40px",width:"40px"}}/></a>
        <a href="mailto:devyanknagpal2002@gmail.com"><GrMail style={{height:"40px",width:"40px"}}/></a>
        <a href="https://twitter.com/DevyankNagpal"><BsTwitter style={{height:"40px",width:"40px"}}/></a>
        </div>
       
      </div>
     </div>
     <div className='emoji'>
<img src="https://github.com/2devyank/portfolio-devyank/blob/main/r2.png?raw=true" alt="" />
     </div>
    </div>
  
    </div>
    <First/>
    <Exp/>
    <Project/>
    <Education/>
    </div>
  
  )
}

export default App
