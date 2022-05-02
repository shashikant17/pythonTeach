import React, { useState } from 'react'
import './nav.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import {BsFillCalendar2WeekFill} from 'react-icons/bs'
import Compiler from '../components/Compiler/Compiler';

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
   
      <nav>
      <Link to="/">
        <a onClick={()=> setActiveNav('#home')} className={activeNav==='#home' ? 'active' : ''}>Home
        </a>
      </Link>

      <Link to="/contest">
        <a onClick={()=> setActiveNav('#contest')} className={activeNav==='#contest' ? 'active' : ''}>Contest
        </a>
      </Link>

      <Link to="/tutorial">
        <a onClick={()=> setActiveNav('#tutorial')} className={activeNav==='#tutorial' ? 'active' : ''}>Tutorial</a>
      </Link>

      <Link to="/calendar">
        <a onClick={()=> setActiveNav('#calender')} className={activeNav==='#calender' ? 'active' : ''}><BsFillCalendar2WeekFill/>
        </a>
      </Link>

      <Link to="/compiler">
        <a onClick={()=> setActiveNav('#compiler')} className={activeNav==='#compiler' ? 'active' : ''}>Compiler
        </a>
      </Link>

      <Link to="/FAQs">
        <a  onClick={()=> setActiveNav('#FAQs')} className={activeNav==='#FAQs' ? 'active' : ''}>FAQs
        </a>
      </Link>

      <Link to="/login">
        <a onClick={()=> setActiveNav('#login')} className={activeNav==='#login' ? 'active' : ''}>Log In
        </a>
      </Link>

    </nav>
   
  )
}

export default Nav