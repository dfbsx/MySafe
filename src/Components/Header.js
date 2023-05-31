import React from 'react'
import './header.css';
import { Link } from "react-router-dom";
import key from '../const'

function Header({buttonVisible}) {
  const logout = () => {
    localStorage.removeItem(key);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <div className="headerBackground">
    <div className="logo">
    <img className="logoPNG" src='/logo.png'/>
    <div>MySafe</div>
    </div>
    {buttonVisible===true?
    <Link to="/"><button className='logoutButton' onClick={logout}>Wyloguj</button></Link>:null}
    </div>
  )
}

export default Header