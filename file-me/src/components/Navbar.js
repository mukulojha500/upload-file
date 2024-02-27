import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <Link to='/files' className='link'>My Files</Link>
        <Link to='/upload' className='link'>Upload</Link>
        <Link to='/profile' className='link'>My Profile</Link>
    </div>
  )
}

export default Navbar