import React from 'react'
import './MessageBox.css';

function MessageBox() {
  return (
    <div className='messageBox'>
        <div className='messageBoxHeader'>
            <p className='isCoded'>Zaszyfrowana</p>
        </div>
        <p className='messageText'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.</p> 
    </div>
  )
}

export default MessageBox