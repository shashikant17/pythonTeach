import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram,BsGithub,BsLinkedin }from 'react-icons/bs'
import { useState } from 'react'
import { IconContext } from 'react-icons'
const Footer = () => {
    const [activeFoot, setActiveFoot]=useState('#')
    return (
        <div>
           <article>
           <IconContext.Provider
      value={{ color:'white', size: '20px' }}
    >
            <a href='https://www.facebook.com/' ><BsFacebook />
            <a href='https://www.instagram.com/?hl=en'><BsInstagram />
            <a href='https://www.linkedin.com/feed/'><BsLinkedin />
            <a href='https://github.com/'><BsGithub /></a></a></a></a>
            <a>-----------------------------2022, All Rights Reserved--------------</a>
            <a>About Us</a>
            <a> | </a>
            <a >Terms & Policies</a>
            </IconContext.Provider>
            </article>
        </div>
    )
}

export default Footer