import React,{useState} from 'react'
import Header from '../Components/Header'
import './NewMessageView.css';
import { Link, useNavigate } from 'react-router-dom';

function NewMessageView() {
    const [buttonVisible,setButtonVisible]=useState(true);
    const navigate = useNavigate();
    const goBack = () => {
            navigate(-1);
        }
  return (
    <div className='newMessagePage'>
        <Header buttonVisible={buttonVisible}/>
        <div className='newMessageSite'>
        <div className='newMessageHeader'>
            <p className='welcomeText'>Dodawanie nowej wiadomości:</p>
            <p className='returnText' onClick={goBack}>Wróć do strony głównej</p>
          </div>
        </div>
    </div>
  )
}

export default NewMessageView