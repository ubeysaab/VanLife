import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Host() {
  return (
    <section >
      {/* <div>Host layout </div> */}
      <nav className=''>
        <ul className='navbar'>
          <NavLink
          end
            className={({isActive})=>{
              return isActive ?"activeLink"
            :""}}
            to={"/host"}>
            Dashboard
          </NavLink>
          <NavLink
            className={({isActive})=>{
              return isActive ?"activeLink"
            :""}}
            to={"/host/income"}>
            Income
          </NavLink>
          <NavLink to={"/host/vans"}
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
            to={"/host/reviews"}>
            Review
          </NavLink>

        </ul>
      </nav>
      <Outlet />


    </section>
  )
}

export default Host