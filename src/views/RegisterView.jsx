import React from 'react'
import Header from '../Components/Header'
import './RegisterView.css';
import LoginInput from '../Components/LoginInput';
import { Link } from "react-router-dom";

function RegisterView() {
  return (
    <div className='loginView'>
    <Header/>
    <div className="loginSite">
        <form className="loginForm" >
            <p className='loginInto'>Zarejestruj się</p>
            <LoginInput inputText="Login" type="text" />
            <LoginInput inputText="Hasło" type="password" />
            <LoginInput inputText="Powtórz hasło" type="password" />
            <Link to="/home"><button className="loginButton">ZAREJESTRUJ</button></Link>
        </form>
    </div>
    </div>
  )
}

export default RegisterView