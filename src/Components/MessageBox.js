import React from 'react'
import './MessageBox.css';

function MessageBox({isEncrypted, body}) {
  return (
    <div className='messageBox'>
        <div className='messageBoxHeader'>
            {isEncrypted===false?<p className='isCoded'>Bez szyfrowania</p>:<p className='isCoded'>Zaszyfrowana</p>}
        </div>
        <p className='messageText'>{body}</p>
    </div>
  )
}

export default MessageBox