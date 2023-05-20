import React, { useState, useEffect } from "react";
import "./MessageView.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import MessageBox from "../Components/MessageBox";
import AlgoDesc from "../Components/AlgoDesc";
import AlgoTab from "../Components/AlgoTab";
import { getSingleMessage } from "../crud/getSingleMessage";

function MessageView() {
  const [allMessageTypes, setAllMessageTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("messageId"));
    console.log(ls.messageId);
    setIsLoading(true);
    getSingleMessage(ls.messageId)
      .then((resp) => {
        console.log("to resp", resp);
        setAllMessageTypes([...resp.data?.messages]);
        console.log("wiadomości", allMessageTypes);
      })
      .catch((err) => {
        console.log("Error", err);
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

  /*const Messages = messagesList?.map((item) => 
    {const d = new Date(item.sent_at);
    return <MessageTab id={item.id} date={d.toLocaleString()} title={item.subject} />}
)*/

const DisplayMessagesVariants = allMessageTypes?.map((item) => 
  <AlgoTab
    subject={item.subject}
    body={item.body}
    encryptedBody={item.encryptedBody}
    time={item.decode_time}
    method={item.encryption_method}
    originalSize={item.original_size}
    size={item.encryption_size}
  />
);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="messageView">
      <Header buttonVisible={buttonVisible} />
      <div className="messageSite">
        <div className="pageDesc">
          <p className="welcomeText"></p>
          <p className="returnText" onClick={goBack}>
            Wróć do strony głównej
          </p>
        </div>
        <div className="displayMessages">
          {/* <MessageBox isEncrypted={false} body={thisMessage.body} />
          <MessageBox isEncrypted={true} body={thisMessage.encrypted_body} />*/}
        </div>
        <p className="welcomeText">Entropia: {/*thisMessage.entropy}*/}</p>
        <p className="welcomeText">Zestawienie algorytmów</p>
        <AlgoDesc />
        <div className="algorithms">{DisplayMessagesVariants}</div>
      </div>
    </div>
  );
}

export default MessageView;
