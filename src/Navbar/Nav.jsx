import React, { useState } from 'react'
import './nav.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import {BsFillCalendar2WeekFill} from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
   
      <nav>
     
      <a herf='#home' onClick={()=> setActiveNav('#home')} className={activeNav==='#home' ? 'active' : ''}>HOME</a>
      <a herf='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}>Contest</a>
      <a herf='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}>Tutorial</a>
      <a herf='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BsFillCalendar2WeekFill/></a>
      <a herf='#compiler' onClick={()=> setActiveNav('#compiler')} className={activeNav==='#compiler' ? 'active' : ''}>Compiler</a>
      <a herf='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}>FAQs</a>
      <a herf='#testimonials' onClick={()=> setActiveNav('#testimonials')} className={activeNav==='#testimonials' ? 'active' : ''}>Log In</a>
      
    </nav>
   
  )
}

export default Nav