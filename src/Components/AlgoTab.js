import React,{useState} from 'react'
import './AlgoTab.css';

function AlgoTab({time,method,originalSize,size,id,index,setMessKey,messageKey}) {
  const currMess = () => {
    setMessKey(index);
    console.log(index);
    console.log(messageKey)
  }
  return (
    <thead onClick={()=>currMess()}>
    <tr style={{backgroundColor: messageKey===index?"#D5ECFF":null}} className='algoRow'>
        <td className='algoItem'>{method}</td>
        <td className='algoItem'>{time}</td>
        <td className='algoItem'>{originalSize}</td>
        <td className='algoItem'>{size}</td>
    </tr>
    </thead>
  )
}

export default AlgoTab