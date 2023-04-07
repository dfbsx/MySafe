import React from 'react'
import './AlgoDesc.css';

function AlgoDesc() {
  return (
    <div className='algoRowDesc'>
    <td className="algoName">Nazwa</td>
    <td className="algoDesc">Czas działania</td>
    <td className="algoDesc">Rozmiar przed</td>
    <td className="algoDesc">Rozmiar po</td>
    </div>
  )
}

export default AlgoDesc