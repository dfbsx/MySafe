import './App.css';
import LoginView from './views/LoginView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './views/MainPage';
import { useEffect, useState } from 'react';
import MessageView from './views/MessageView';
import RegisterView from './views/RegisterView';
import NewMessageView from './views/NewMessageView';
import setupAxios from './crud/setupAxios';


function App() {

  useEffect(()=>{setupAxios()},[])
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<LoginView/>}/>
          <Route path="register" element={<RegisterView/>} />
          <Route path="home" element={<MainPage/>} />
          <Route path="newMessage" element={<NewMessageView/>}/>
          <Route path="home/messages/:messagesId" element={<MessageView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
