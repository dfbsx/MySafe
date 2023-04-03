import React, {useState} from 'react'
import Header from '../Components/Header'

function MainPage() {
    const [buttonVisible,setButtonVisible]=useState(true);
  return (
    <div>
        <Header buttonVisible={buttonVisible}/>
    </div>
  )
}

export default MainPage