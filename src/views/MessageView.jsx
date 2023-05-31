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
  const [messageKey, setMessageKey] = useState(0);
  const [currentMessage, setCurrentMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("messageId"));
    setIsLoading(true);
    getSingleMessage(ls.messageId)
      .then((resp) => {
        setAllMessageTypes([...resp.data?.messages]);
      })
      .catch((err) => {
        console.log("Error", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (allMessageTypes.length > 0) {
      setCurrentMessage(allMessageTypes[messageKey]);
    }
  }, [allMessageTypes, messageKey]);

  const [buttonVisible, setButtonVisible] = useState(true);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const DisplayMessagesVariants = allMessageTypes?.map((item, index) => (
    <AlgoTab
      key={index}
      setMessKey={setMessageKey}
      messageKey={messageKey}
      index={index}
      subject={item.subject}
      body={item.body}
      encryptedBody={item.encryptedBody}
      time={item.decode_time}
      method={item.encryption_method}
      originalSize={item.original_size}
      size={item.encryption_size}
    />
  ));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="messageView">
      <Header buttonVisible={buttonVisible} />
      <div className="messageSite">
        <div className="pageDesc">
          {currentMessage ? (
            <>
              <p className="welcomeText">{currentMessage.subject}</p>
              <p className="returnText" onClick={goBack}>
                Wróć do strony głównej
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="displayMessages">
          {currentMessage ? (
            <>
              <MessageBox isEncrypted={false} body={currentMessage.body} />
              <MessageBox
                isEncrypted={true}
                body={currentMessage.encrypted_body}
              />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <p className="welcomeText">
          Entropia:{currentMessage && currentMessage.entropy}{" "}
        </p>
        <p className="welcomeText">Zestawienie algorytmów</p>
        <table className="messagesTable">
          <AlgoDesc />
        </table>
        <table className="algorithms">{DisplayMessagesVariants}</table>
      </div>
    </div>
  );
}

export default MessageView;
