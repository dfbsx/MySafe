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
      getMessagesList()
      .then((resp) => {
        console.log("to resp",resp)
        setMessagesList([...resp.data])
      })
      .catch((err) => {
        console.log(err)
      });
    setUsername(lsdata?.login);
  }, []);

  const [buttonVisible, setButtonVisible] = useState(true);
  const Messages = messagesList?.map((item) => 
    {const d = new Date(item.sent_at);
    return <MessageTab key={item.id} id={item.id} date={d.toLocaleString()} title={item.subject} />}
)
  
  return (
    <div className="mainPage">
      <Header buttonVisible={buttonVisible} />
      <div className="mainSite">
        <div className="pageHeader">
          <p className="welcomeText">
            Witaj,&nbsp;<span className="username">{username}</span>! Sprawdź swoje
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
