import React, {useState} from 'react'
import './header.css';

function Header() {
    const [buttonVisible,setButtonVisible]=useState(false);
  return (
    <div className="headerBackground">
    <div className="logo">
    <img className="logoPNG" src='/logo.png'/>
    <div>MySafe</div>
    </div>
    {buttonVisible==true?
    <button>login</button>:null}
    </div>
  )
}

export default Header