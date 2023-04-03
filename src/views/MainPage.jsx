import React, {useState} from 'react'
import Header from '../Components/Header'
import './MainPage.css';
import MessageTab from '../Components/MessageTab';
import MessageDesc from '../Components/MessageDesc';

function MainPage({user}) {

  const [messages, setMessages] = useState([{
    id:1,
    date: "01.01.2000",
    title: "Nowa wiadomość",
  },
  {
    id:2,
    date: "01.01.2000",
    title: "Wiadomość 1",
  },
  {
    id:3,
    date: "01.01.2000",
    title: "Podaj hasło",
  },
  {
    id:4,
    date: "01.01.2000",
    title: "Odczytaj mnie",
  },
  {
    id:5,
    date: "01.01.2000",
    title: "Halo?",
  },
  {
    id:6,
    date: "01.01.2000",
    title: "Odczytaj mnie",
  },
  {
    id:7,
    date: "01.01.2000",
    title: "Odczytaj mnie",
  },
  {
    id:8,
    date: "01.01.2000",
    title: "Odczytaj mnie",
  },]);
  

  const [buttonVisible,setButtonVisible]=useState(true);

  const Messages = messages?.map((item)=>(<MessageTab
    id={item.id}
    date={item.date}
    title={item.title}
  />));

  return (
    <div className='mainPage'>
        <Header buttonVisible={buttonVisible}/>
        <div className='mainSite'>  
        <p className='welcomeText'>Witaj,&nbsp;<p className='username'>{user.login}</p>! Sprawdź swoje wiadomości:</p>
        <div className="messagesTable">
          <MessageDesc/>
          {Messages}
        </div>
        </div>
    </div>
  )
}

export default MainPage