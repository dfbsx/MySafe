import React from 'react'
import './header.css';
import { Link } from "react-router-dom";

function Header({buttonVisible}) {
  return (
    <div className="headerBackground">
    <div className="logo">
    <img className="logoPNG" src='/logo.png'/>
    <div>MySafe</div>
    </div>
    {buttonVisible===true?
    <Link to="/"><button className='logoutButton'>Wyloguj</button></Link>:null}
    </div>
  )
}

export default Header