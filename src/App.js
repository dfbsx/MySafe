import './App.css';
import LoginView from './views/LoginView';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './views/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/home",
    element: <MainPage />,
  },
]);
function App() {
  return (
    <div className="App">
      <LoginView/>
    </div>
  );
}

export default App;
