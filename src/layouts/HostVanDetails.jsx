import React, { useEffect, useState } from 'react'
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'
import VanCard from '../Components/VanCard'
import { FaArrowLeft } from 'react-icons/fa'

function HostVanDetails() {

  const { id } = useParams()
  const [vanDetails, setVanDetails] = useState({})
  useEffect(() => {
    fetch(`/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans[0]))
  }, [])
  return (
    <section style={{padding:'20px'}}>


      <Link to=".." style={{ display: "flex", alignItems: "center" }}><FaArrowLeft /> &nbsp; Back to all vans</Link>

      <VanCard host horizontal {...vanDetails} />
      <nav className='' style={{width:'80%'}} >
        <ul className='navbar'>
          <NavLink
            end
            className={({ isActive }) => {
              return isActive ? "activeLink"
                : ""
            }}
            to={`/host/vans/${id}`}>
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "activeLink"
                : ""
            }}
            to={`/host/vans/${id}/pricing`}>
            Pricing
          </NavLink>
          <NavLink to={`/host/vans/${id}/photos`}
            className={({ isActive }) => {
              return isActive ? "activeLink"
                : ""
            }}

          >
            Photos
          </NavLink>


        </ul>
      </nav>
      {/* here we need to pass data down to the children routes so we will need to use Outlet Context  */}
      <Outlet  context={vanDetails} />
    </section>
  )
}

export default HostVanDetails