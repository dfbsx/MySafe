import React from 'react'
import './LoginInput.css';

function LoginInput({inputText, type}) {
  return (
    <div><input placeholder={inputText} type={type}/></div>
  )
}

export default LoginInput