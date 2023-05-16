import React, {useState} from 'react'
import './MessageView.css';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../Components/MessageBox';
import AlgoDesc from '../Components/AlgoDesc';
import AlgoTab from '../Components/AlgoTab';

function MessageView() {
const [buttonVisible,setButtonVisible]=useState(true);
const navigate = useNavigate();
const goBack = () => {
		navigate(-1);
	}
  return (
    <div className='messageView'>
        <Header buttonVisible={buttonVisible}/>
        <div className='messageSite'>
          <div className='pageDesc'>
            <p className='welcomeText'>Moja wiadomość</p>
            <p className='returnText' onClick={goBack}>Wróć do strony głównej</p>
          </div>
          <div className='displayMessages'>
            <MessageBox/>
            <MessageBox/>
          </div>
          <p className='welcomeText'>Entropia</p>
          <p className='welcomeText'>Zestawienie algorytmów</p>
          <AlgoDesc/>
          <div className='algorithms'>
            <AlgoTab/>
            <AlgoTab/>
            <AlgoTab/>
            <AlgoTab/>
            <AlgoTab/>
            <AlgoTab/>
          </div>
        </div>
    </div>
  )
}

export default MessageView