import React from 'react'
import './LoginInput.css';

function LoginInput({inputText, type, value, onChange}) {
  return (
    <div><input placeholder={inputText} type={type} value={value} onChange={onChange}/></div>
  )
}

export default LoginInput