import React, {useState} from 'react'
import './MessageView.css';
import Header from '../Components/Header';

function MessageView() {
const [buttonVisible,setButtonVisible]=useState(true);
  return (
    <div className='messageView'>
        <Header buttonVisible={buttonVisible}/>
        <div className='messageSite'></div>
    </div>
  )
}

export default MessageView