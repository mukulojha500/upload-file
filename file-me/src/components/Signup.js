import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
  
    const handleName = (e)=> setName(e.target.value);
    const handleEmail = (e)=> setEmail(e.target.value);
    const handlePassword = (e)=> setPassword(e.target.value);
    const handleToggle = ()=> setShow(!show);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/auth/signup',{
                name,
                email,
                password
            });
            console.log(response.data)
            localStorage.setItem('user', JSON.stringify(response.data))
        }catch(error){
            console.log(error);
        }
    }
  
    return (
      <div className='form'>
        <input type='text' value={name} onChange={handleName} placeholder='Enter your name'/>
        <input type='email' value={email} onChange={handleEmail} placeholder='Enter your email'/>
        <div className='password'>
          <input type={show?'text':'password'} value={password} onChange={handlePassword} placeholder='Enter your password'/>
          <button onClick={handleToggle}>{show===true?'Hide':'Show'}</button>
        </div>
        <button onClick={handleSubmit}>Register</button>
        <span>Have an account already? <Link to='/login'>Login</Link></span>
      </div>
    )
}

export default Signup