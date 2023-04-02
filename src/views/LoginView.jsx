import React, {useState} from 'react'
import Header from '../Components/Header';
import './LoginView.css';
import LoginInput from '../Components/LoginInput';

function LoginView() {
  const [user,setUser] = useState({
    login: "",
    password: "",
  })

  const handleLogin = () => {
    if(user.login === "user" && user.password === "haslo"){
      console.log("OK"); console.log(user.login);console.log(user.password)
    }
    else{
      console.log("blad");console.log(user.login);console.log(user.password)
    }
  }

  return (
    <div className='loginView'>
        <Header/>
        <div className="loginSite">
            <form className="loginForm" onSubmit={(event)=>event.preventDefault()}>
                <p>Zaloguj się</p>
                <LoginInput inputText="Login" type="text" value={user.login} onChange={(e)=>setUser({...user, login:e.target.value})}/>
                <LoginInput inputText="Hasło" type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
                <button onClick={handleLogin}>ZALOGUJ</button>
            </form>
        </div>
    </div>
  )
}

export default LoginView