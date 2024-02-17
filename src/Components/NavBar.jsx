import React from 'react'
import { Link } from 'react-router-dom'

// Importing images and components 

import logo from "../assets/logog.png"


function NavBar() {
  return (
    <nav className="navbar">
      <div className='navbar__logo'>
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className='navbar__list' >
        <ul>
          <Link to="/about"><li>About</li></Link>
          <Link to="/vans"><li>Vans</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar