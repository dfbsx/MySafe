import React from 'react'
import './MessageTab.css';
import { SlArrowRight } from 'react-icons/sl';
import { Link } from "react-router-dom";


function MessageTab({date,title,id}) {
  return (
    <Link to={`messages/${id}`}>
    <div className='messageRow'>
        <td className="tableDate">{date}</td>
        <td className="tableMessageTitle">{title}</td>
        <td className="moreAboutMessage"><SlArrowRight style={{color: "#329DFF"}}/></td>
    </div>
    </Link>
  )
}

export default MessageTab