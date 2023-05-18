import React from 'react'
import './MessageDesc.css';


function MessageDesc() {
  return (
    <table className='messageRowDesc'>
      <thead>
        <tr>
    <td className="tableDateDesc">Data</td>
    <td className="tableMessageTitleDesc">Tytuł</td>
    <td className="emptyDesc"></td>
    </tr>
    </thead>
</table>
  )
}

export default MessageDesc