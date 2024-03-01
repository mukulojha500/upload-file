import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleEmail = (e)=> setEmail(e.target.value);
  const handlePassword = (e)=> setPassword(e.target.value);
  const handleToggle = ()=> setShow(!show);

  return (
    <div className='form'>
      <input type='email' value={email} onChange={handleEmail} placeholder='Enter your email'/>
      <div className='password'>
        <input type={show?'text':'password'} value={password} onChange={handlePassword} placeholder='Enter your password'/>
        <button onClick={handleToggle}>{show===true?'Hide':'Show'}</button>
      </div>
      <button>Login</button>
      <span>New User? <Link to='/signup'>Register now</Link></span>
    </div>
  )
}

export default Login