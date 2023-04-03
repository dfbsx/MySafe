import React, {useState,useEffect} from 'react'
import Header from '../Components/Header';
import './LoginView.css';
import LoginInput from '../Components/LoginInput';
import { Link } from "react-router-dom";
import MainPage from './MainPage';

function LoginView() {

  const [user,setUser] = useState({
    login: "",
    password: "",
  })

  const [redirect, setRedirect] = useState(false);
  
  useEffect(()=>{
    if(user.login === "user" && user.password === "haslo"){
      setRedirect(true);
    }
    else{
      setRedirect(false);
    }
  },[user])
 

  const handleLogin = (event) => {
    event.preventDefault();
    if(user.login === "user" && user.password === "haslo"){
      console.log(redirect); console.log(user.login);console.log(user.password)
    }
    else{
      console.log(redirect);console.log(user.login);console.log(user.password)
    }
  }

  return (
    <nav className='loginView'>
        <Header/>
        <div className="loginSite">
            <form className="loginForm" onSubmit={handleLogin}>
                <p>Zaloguj się</p>
                <LoginInput inputText="Login" type="text" value={user.login} onChange={(e)=>setUser({...user, login:e.target.value})}/>
                <LoginInput inputText="Hasło" type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
                {redirect===true?<Link to="/home"><button >ZALOGUJ</button></Link>:<Link to="/"><button >ZALOGUJ</button></Link>}
            </form>
        </div>
    </nav>
  )
}

export default LoginView