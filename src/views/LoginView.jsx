import React from 'react'
import Header from '../Components/Header';
import './LoginView.css';
import LoginInput from '../Components/LoginInput';

function LoginView() {
  const user = {
    login: "user",
    password: "password",
  };
  return (
    <div className='loginView'>
        <Header/>
        <div className="loginSite">
            <form className="loginForm">
                <p>Zaloguj się</p>
                <LoginInput inputText="Login" type="text"/>
                <LoginInput inputText="Hasło" type="password"/>
                <button>ZALOGUJ</button>
            </form>
        </div>
    </div>
  )
}

export default LoginView