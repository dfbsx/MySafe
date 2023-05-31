import "./App.css";
import LoginView from "./views/LoginView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import { useEffect, useState } from "react";
import MessageView from "./views/MessageView";
import RegisterView from "./views/RegisterView";
import NewMessageView from "./views/NewMessageView";
import setupAxios from "./crud/setupAxios";
import key from "./const"
import Protected from "./Protected";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  useEffect(() => {
    setupAxios();
    const lsdata = JSON.parse(localStorage.getItem(key));
    if (lsdata?.login) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
            <Route path="home" element={<Protected isLoggedIn={isLoggedIn}> <MainPage /> </Protected>} />
            <Route path="newMessage" element={<Protected isLoggedIn={isLoggedIn}> <NewMessageView /></Protected>} />
            <Route path="home/messages/:messagesId" element={<Protected isLoggedIn={isLoggedIn}> <MessageView /></Protected>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
