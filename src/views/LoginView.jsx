import React from 'react'
import Header from '../Components/Header';
import './LoginView.css';
import LoginInput from '../Components/LoginInput';

function LoginView() {
  return (
    <div className='loginView'>
        <Header/>
        <div className="loginSite">
            <form className="loginForm">
                <p>Zaloguj się</p>
                <LoginInput inputText="Login"/>
                <LoginInput inputText="Hasło"/>
                <button>ZALOGUJ</button>
            </form>
        </div>
    </div>
  )
}

export default LoginView