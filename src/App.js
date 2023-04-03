import './App.css';
import LoginView from './views/LoginView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './views/MainPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<LoginView />} />
          <Route path="home" element={<MainPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
