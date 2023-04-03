import './App.css';
import LoginView from './views/LoginView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './views/MainPage';
import { useState } from 'react';


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
          <Route path="home" element={<MainPage user={user}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
