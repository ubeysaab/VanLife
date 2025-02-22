import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiLogoutCircleRLine } from "react-icons/ri";

// Importing images and components 
import icon from "../assets/Icon.png"

import logo from "../assets/logog.png"


function NavBar() {
  return (
    <nav className="navbar ">
      <div className='navbar__logo'>
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className='navbar__list' >
        <ul>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "activeLink"
                : ""
            }}
            to="/about"><li>About</li></NavLink >
          <NavLink
            className={({ isActive }) => {
              return isActive ? "activeLink"
                : ""
            }}
            to="/vans"><li>Vans</li></NavLink >
          <NavLink
            className={({ isActive }) => {
              return isActive ? "activeLink"
                : ""
            }}

            to="/host"  ><li>Host</li></NavLink >
          <NavLink
            className={"icon"}

            to="/login"  ><li><img src={icon} alt="" /></li></NavLink >
            
          {localStorage.getItem('user')&&<RiLogoutCircleRLine  className='icon' onClick={()=>{
            localStorage.removeItem('user')
          }}/>}
        </ul>
         
            

      </div>
    </nav>
  )
}

export default NavBar