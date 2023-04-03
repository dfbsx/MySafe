import React from 'react'
import './MessageTab.css';
import { SlArrowRight } from 'react-icons/sl';


function MessageTab({date,title}) {
  return (
    <div className='messageRow'>
        <td className="tableDate">{date}</td>
        <td className="tableMessageTitle">{title}</td>
        <td className="moreAboutMessage"><SlArrowRight style={{color: "#329DFF"}}/></td>
    </div>
  )
}

export default MessageTab