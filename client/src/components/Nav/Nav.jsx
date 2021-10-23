import './Nav.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import { propTypes } from 'react-bootstrap/esm/Image';

const Nav = (props) => {

  const alwaysOptions = (
    <>
      <a className="link" href="#projects">Projects</a>
      <a className="link" href="https://drive.google.com/file/d/1MHDD_8j3FSJeQWfyxnmNnz-pJ9SmmAN8/view?usp=sharing">Resume</a>
      <a className="link" href="#about">About Me</a>
      <a className="link" href="#contact">Contact</a>
    </>
  )

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src='https://i.imgur.com/xkObLhd.png'
            alt='home'
            id='home-link' />
        </NavLink>
        <div className='nav-block'>
          <div className="links">
          {alwaysOptions}
          </div>
        </div>
      </div>
      <Sidebar props={props} pageWrapId={"page-wrap"} outerContainerId={"App"}/>
    </nav >
  )
}
export default Nav