import React, { useState, useEffect } from "react";
import "./MessageView.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import MessageBox from "../Components/MessageBox";
import AlgoDesc from "../Components/AlgoDesc";
import AlgoTab from "../Components/AlgoTab";
import { getSingleMessage } from "../crud/getSingleMessage";

function MessageView() {
  const [thisMessage, setThisMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("messageId"));
    console.log(ls.messageId);
    setIsLoading(true);
    getSingleMessage(ls.messageId)
      .then((resp) => {
        console.log("to resp", resp);
        setThisMessage(resp.data?.message);
        console.log(resp?.data?.message?.encrypted_body);
        console.log(thisMessage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const [isEncrypted, setIsEncrypted] = useState();
  const [buttonVisible, setButtonVisible] = useState(true);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="messageView">
      <Header buttonVisible={buttonVisible} />
      <div className="messageSite">
        <div className="pageDesc">
          <p className="welcomeText">{thisMessage.subject}</p>
          <p className="returnText" onClick={goBack}>
            Wróć do strony głównej
          </p>
        </div>
        <div className="displayMessages">
          <MessageBox isEncrypted={false} body={thisMessage.body} />
          <MessageBox isEncrypted={true} body={thisMessage.encrypted_body} />
        </div>
        <p className="welcomeText">Entropia: {thisMessage.entropy}</p>
        <p className="welcomeText">Zestawienie algorytmów</p>
        <AlgoDesc />
        <div className="algorithms">
          <AlgoTab />
          <AlgoTab />
          <AlgoTab />
          <AlgoTab />
          <AlgoTab />
          <AlgoTab />
        </div>
      </div>
    </div>
  );
}

export default MessageView;
