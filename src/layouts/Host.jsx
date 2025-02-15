import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Host() {
  return (
    // TODO : THE COMPONENT (NAV) WHICH WE USE HERE IT CAN BE REUSABLE COMPONENT BECAUSE WE WILL USE THE SAME ARCHITECTURE IN HOSTVANDETAILS SO MAKE IT COMPOUND COMPONENT
    <section >
      {/* <div>Host layout </div> */}
      <nav className=''>
        <ul className='navbar'>
          <NavLink
          end
            className={({isActive})=>{
              return isActive ?"activeLink"
            :""}}
            to={"."}>
            Dashboard
          </NavLink>
          <NavLink
            className={({isActive})=>{
              return isActive ?"activeLink"
            :""}}
            to={"income"}>
            Income
          </NavLink>
          <NavLink to={"vans"}
           className={({isActive})=>{
            return isActive ?"activeLink"
          :""}}
          
          >
            Vans
          </NavLink>
          <NavLink
            className={({isActive})=>{
              return isActive ?"activeLink"
            :""}}
            to={"reviews"}>
            Review
          </NavLink>

        </ul>
      </nav>
      <Outlet />
    </section>
  )                     
}

export default Host