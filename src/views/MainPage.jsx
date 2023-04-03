import React, {useState} from 'react'
import Header from '../Components/Header'
import './MainPage.css';
import MessageTab from '../Components/MessageTab';
import MessageDesc from '../Components/MessageDesc';

function MainPage({user}) {

  const [messages, setMessages] = useState([{
    date: "01.01.2000",
    title: "Nowa wiadomość",
  },
  {
    date: "01.01.2000",
    title: "Wiadomość 1",
  },
  {
    date: "01.01.2000",
    title: "Podaj hasło",
  },
  {
    date: "01.01.2000",
    title: "Odczytaj mnie",
  },
  {
    date: "01.01.2000",
    title: "Halo?",
  },]);

  const [buttonVisible,setButtonVisible]=useState(true);

  const Messages = messages?.map((item)=>(<MessageTab
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