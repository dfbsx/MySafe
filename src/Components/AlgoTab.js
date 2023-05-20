import React from 'react'
import './AlgoTab.css';

function AlgoTab({subject, body, encryptedBody,time,method,originalSize,size}) {
  return (
    <div className='algoRow'>
        <td className='algoItem'>{method}</td>
        <td className='algoItem'>{time}</td>
        <td className='algoItem'>{originalSize}</td>
        <td className='algoItem'>{size}</td>
    </div>
  )
}

export default AlgoTab