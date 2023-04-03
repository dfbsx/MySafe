import React, {useState} from 'react'
import Header from '../Components/Header'
import './MainPage.css';

function MainPage({user}) {

  const [buttonVisible,setButtonVisible]=useState(true);
  return (
    <div>
        <Header buttonVisible={buttonVisible}/>
        <div className='mainSite'>  
        <p className='welcomeText'>Witaj, &nbsp;<p className='username'>{user.login}</p>! Sprawdź swoje wiadomości:</p>
        </div>
    </div>
  )
}

export default MainPage