import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./LoginView.css";
import LoginInput from "../Components/LoginInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../crud/login";
import key from "../const.js";

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
        const cookies = resp;
        console.log("Tutaj then", cookies);
        document.cookie = cookies;
        console.log("Zapisane ciasteczka:", document.cookie);
        localStorage.setItem(
          key,
          JSON.stringify({ login: loginData.login, cookie: document.cookie })
        );
        navigate("/home");
      })
      .catch((error) => {
        setLoginError(true);
        console.log("Błąd", error);
      });
  };

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
            onChange={(e) =>
              setLoginData({ ...loginData, login: e.target.value })
            }
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
