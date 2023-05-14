import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./NewMessageView.css";
import { Link, useNavigate } from "react-router-dom";
import { BsSave } from "react-icons/bs";
import { createMessage } from "../crud/createMessage";
import key from '../const'

function NewMessageView() {
  const navigate = useNavigate();
  useEffect(() => {
    const lsdata = JSON.parse(localStorage.getItem(key));
    if (!lsdata?.token) {
      navigate("/home");
    }
  });
  const [buttonVisible, setButtonVisible] = useState(true);
  const [newMessage, setNewMessage] = useState({
    title: "",
    text: "",
  });
  const addMessage = () => {
    console.log(newMessage.title)
    console.log(newMessage.text)
    createMessage(newMessage.title,newMessage.text)
      .then((resp) => {
        console.log(resp);
        //localStorage.setItem(key,JSON.stringify({login:loginData.login,token:resp.data.access}));
        //navigate("/home");
        console.log(newMessage)
      })
      .catch((error) => {
        console.log("Błąd",error)
      });
  };
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className="newMessagePage">
      <Header buttonVisible={buttonVisible} />
      <div className="newMessageSite">
        <div className="newMessageHeader">
          <p className="welcomeText">Dodawanie nowej wiadomości:</p>
          <p className="returnText" onClick={goBack}>
            Wróć do strony głównej
          </p>
        </div>
        <p>Tytuł wiadomości:</p>
        <input className="messageTitle" 
        value={newMessage.title}
        onChange={(e) =>
          setNewMessage({ ...newMessage, title: e.target.value })
        }/>
        <p>Treść wiadomości:</p>
        <textarea className="messageText"
        value={newMessage.text}
        onChange={(e) =>
          setNewMessage({ ...newMessage, text: e.target.value })
        }
        ></textarea>
        <button className="saveMessage" onClick={addMessage}>
          <BsSave />
          Zapisz
        </button>
      </div>
    </div>
  );
}

export default NewMessageView;
