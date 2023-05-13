import React from 'react'
import './LoginInput.css';

function LoginInput({inputText, type, value, onChange}) {
  return (
    <input placeholder={inputText} type={type} value={value} onChange={onChange}/>
  )
}

export default LoginInput