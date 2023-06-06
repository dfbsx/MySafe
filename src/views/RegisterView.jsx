import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./RegisterView.css";
import LoginInput from "../Components/LoginInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register } from "../crud/register";
import key from "../const.js";

function RegisterView({setisLoggedIn}) {
  const navigate = useNavigate();

  useEffect(() => {
    const lsdata = JSON.parse(localStorage.getItem(key));
    if (lsdata?.token) {
      navigate("/home");
    }
  });

  const [registerData, setRegisterData] = useState({
    login: "",
    password: "",
    repeatedPassword: "",
  });

  const [redirect, setRedirect] = useState(false);

  const [loginError, setLoginError] = useState(false);

  const handleRegister = () => {
    register(
      registerData.login,
      registerData.password,
      registerData.repeatedPassword
    )
      .then((resp) => {
        const cookies = resp;

        document.cookie = cookies;

        localStorage.setItem(
          key,
          JSON.stringify({ login: registerData.login, cookie: document.cookie })
        );
        setRedirect(true);
        setisLoggedIn(true);
        navigate("/home");
      })
      .catch((error) => {
        setLoginError(true);
        console.log("Błąd", error);
        setisLoggedIn(false);
      });
  };

  return (
    <nav className="registerView">
      <Header />
      <div className="registerSite">
        <form
          className="registerForm"
          onSubmit={(event) => event.preventDefault()}
        >
          <p className="registerInto">Zarejestruj się</p>
          {loginError === true ? (
            <p className="loginError">Niepoprawne dane</p>
          ) : null}
          <LoginInput
            inputText="Login"
            type="text"
            value={registerData.login}
            onChange={(e) =>
              setRegisterData({ ...registerData, login: e.target.value })
            }
          />
          <LoginInput
            inputText="Hasło"
            type="password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
          <LoginInput
            inputText="Powtórz hasło"
            type="password"
            value={registerData.repeatedPassword}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                repeatedPassword: e.target.value,
              })
            }
          />
          <p className="noAccount">
            Masz już konto? &nbsp;
            <Link to="/">
              <strong>Zaloguj się</strong>
            </Link>
          </p>
          {redirect === true ? (
            <Link to="/home">
              <button className="registerButton" onClick={handleRegister}>
                Zarejestruj
              </button>
            </Link>
          ) : (
            <Link to="/register">
              <button className="registerButton" onClick={handleRegister}>
                Zarejestruj
              </button>
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
}

export default RegisterView;
