import './App.css';
import LoginView from './views/LoginView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './views/MainPage';
import { useState } from 'react';
import MessageView from './views/MessageView';
import RegisterView from './views/RegisterView';
import NewMessageView from './views/NewMessageView';


function App() {

  const [user,setUser] = useState({
    login: "",
    password: "",
  })

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<LoginView user={user} setUser={setUser}/>} />
          <Route path="register" element={<RegisterView/>} />
          <Route path="home" element={<MainPage user={user}/>} />
          <Route path="newMessage" element={<NewMessageView/>}/>
          <Route path="home/messages/:messagesId" element={<MessageView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
