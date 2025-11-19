import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <nav className='navbar'>
    <Link to ="/"> {/*pointing to home page */}
    <p className='text-2xl font-bold text-gradient'>RESUMIND</p> 
    </Link>
    <Link to="/upload" className='primary-button w-fit'>Upload Resume</Link> {/* link pointing to upload */}
    </nav>
  )
}

export default Navbar