import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./LoginView.css";
import LoginInput from "../Components/LoginInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../crud/login";
import key from "../const.js"

function LoginView() {
  const navigate = useNavigate();

  useEffect(() => {
    const lsdata = JSON.parse(localStorage.getItem(key));
    if (lsdata?.token) {
      navigate("/home");
    }
  });

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    login(loginData.login, loginData.password)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem(key,JSON.stringify({login:loginData.login,token:resp.data.access}));
        navigate("/home");
        console.log(loginData.login,loginData.password)
      })
      .catch((error) => {
        //alert("Wprowadzone dane są niepoprawne");
        setLoginError(true);
        console.log("Błąd",error)
      });
  };

  /*useEffect(()=>{
    if(user.login === "user" && user.password === "haslo"){
      setRedirect(true);
      setLoginError(false);
    }
    else{
      setRedirect(false);
    }
  },[user])*/

  /*const handleLogin = () => {
    if(user.login === "user" && user.password === "haslo"){
      console.log(redirect); console.log(user.login);console.log(user.password)
    }
    else{
      console.log(redirect);console.log(user.login);console.log(user.password)
      setLoginError(true);
      setUser({...user, login:"",password:""})
    }
  }*/

  return (
    <nav className="loginView">
      <Header />
      <div className="loginSite">
        <form
          className="loginForm"
          onSubmit={(event) => event.preventDefault()}
        >
          <p className="loginInto">Zaloguj się</p>
          {loginError === true ? (
            <p className="loginError">Nieprawidłowy login lub/i hasło</p>
          ) : null}
          <LoginInput
            inputText="Login"
            type="text"
            value={loginData.login}
            onChange={(e) => setLoginData({ ...loginData, login: e.target.value })}
          />
          <LoginInput
            inputText="Hasło"
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <p className="noAccount">
            Nie masz konta? &nbsp;
            <Link to="/register">
              <strong>Zarejestruj się</strong>
            </Link>
          </p>
          {redirect === true ? (
            <Link to="/home">
              <button className="loginButton" onClick={handleLogin}>
                ZALOGUJ
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button className="loginButton" onClick={handleLogin}>
                ZALOGUJ
              </button>
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
}

export default LoginView;
