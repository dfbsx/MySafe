import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import "./RegisterView.css";
import LoginInput from "../Components/LoginInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register } from "../crud/register";
import key from '../const'

function RegisterView() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem(key)).token;
    if (token) {
      navigate("/home");
    }
  });

  const [registerData, setRegisterData] = useState({
    login: "",
    password: "",
    repeatedPassword: "",
  });

  const handleRegister = () => {
    console.log(registerData)
    register(registerData.login,registerData.password,registerData.repeatedPassword)
      .then((resp) => {
        console.log("resp",resp);
        localStorage.setItem(key, JSON.stringify({login:resp.data.username,token:resp.data.access}))
        navigate("/home");
      })
      .catch((error) => {
        console.log("Błąd",error);
      });
  };

  return (
    <div className="registerView">
      <Header />
      <div className="registerSite">
        <form className="registerForm">
          <p className="registerInto">Zarejestruj się</p>
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
              setRegisterData({ ...registerData, repeatedPassword: e.target.value })
            }
          />
          <Link to="/home">
            <button className="loginButton" onClick={handleRegister}>
              ZAREJESTRUJ
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterView;
