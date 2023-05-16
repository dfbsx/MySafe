import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./MainPage.css";
import MessageTab from "../Components/MessageTab";
import MessageDesc from "../Components/MessageDesc";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import key from "../const";
import { getMessagesList } from "../crud/getMessagesList";

function MainPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [messagesList, setMessagesList] = useState([]);
  useEffect(() => {
    const lsdata = JSON.parse(localStorage.getItem(key));
     if (lsdata?.cookie) {
      navigate("/home");
      getMessagesList()
      .then((resp) => {
        console.log("to resp",resp)
        setMessagesList([...resp.data])
        //resp.data.map((item)=> {console.log(item); setMessagesList({...messagesList,item})});
      })
      .catch((err) => {
        console.log(err)
      });
    } else {
      navigate("/");
    }
    setUsername(lsdata?.login);
    //console.log("Lista",messagesList)
   /* var url = "http://localhost:8000/message/list"; // Adres docelowy*/
    //var token = `"${lsdata.token}"`;
    /*fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Błąd sieciowy: " + response.status);
        }
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });*/
      //getMessagesList().then(data=>console.log("MainPage",data))
  }, []);

  

  const [buttonVisible, setButtonVisible] = useState(true);
  const Messages = messagesList?.map((item) => (
    <MessageTab id={item.id} date="nienzana" title={item.subject} />
  ))
  

  return (
    <div className="mainPage">
      <Header buttonVisible={buttonVisible} />
      <div className="mainSite">
        <div className="pageHeader">
          <p className="welcomeText">
            Witaj,&nbsp;<p className="username">{username}</p>! Sprawdź swoje
            wiadomości:
          </p>
          <Link to="/newMessage">
            <button className="addMessage">
              <AiOutlinePlus style={{ color: "#FFFFFF" }} />
              Dodaj wiadomość
            </button>
          </Link>
        </div>
        <div className="messagesTable">
          <MessageDesc />
            {Messages}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
