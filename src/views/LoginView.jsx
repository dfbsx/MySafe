import React, {useState,useEffect} from 'react'
import Header from '../Components/Header';
import './LoginView.css';
import LoginInput from '../Components/LoginInput';
import { Link } from "react-router-dom";

function LoginView({user,setUser}) {

  const [redirect, setRedirect] = useState(false);

  const [loginError, setLoginError] = useState(false);
  
  useEffect(()=>{
    if(user.login === "user" && user.password === "haslo"){
      setRedirect(true);
      setLoginError(false);
    }
    else{
      setRedirect(false);
    }
  },[user])
 

  const handleLogin = () => {
    if(user.login === "user" && user.password === "haslo"){
      console.log(redirect); console.log(user.login);console.log(user.password)
    }
    else{
      console.log(redirect);console.log(user.login);console.log(user.password)
      setLoginError(true);
      setUser({...user, login:"",password:""})
    }
  }

  return (
    <nav className='loginView'>
        <Header/>
        <div className="loginSite">
            <form className="loginForm" onSubmit={(event)=>event.preventDefault()}>
                <p>Zaloguj się</p>
                {loginError===true?<p className='loginError'>Nieprawidłowy login lub/i hasło</p>:null}
                <LoginInput inputText="Login" type="text" value={user.login} onChange={(e)=>setUser({...user, login:e.target.value})}/>
                <LoginInput inputText="Hasło" type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
                {redirect===true?<Link to="/home"><button className="loginButton" onClick={handleLogin}>ZALOGUJ</button></Link>:<Link to="/"><button className="loginButton" onClick={handleLogin}>ZALOGUJ</button></Link>}
            </form>
        </div>
    </nav>
  )
}

export default LoginView