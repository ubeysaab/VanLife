import React, { useEffect, useState } from 'react'
import { useParams ,Link,Outlet} from 'react-router-dom'
import VanCard from '../../Components/VanCard'
import { FaArrowLeft } from 'react-icons/fa'

function HostVanDetails() {

  const {id} = useParams()
  const [vanDetails,setVanDetails]= useState({})
  useEffect(()=>{
    fetch(`/host/vans/${id}`)
    .then(res => res.json())
    .then(data => setVanDetails(data.vans[0]))
  },[])
  return (
    <section>
      
      
      <Link to="/host/vans" style={{ display: "flex", alignItems: "center" }}><FaArrowLeft /> &nbsp; Back to all vans</Link>

       <VanCard host horizontal {...vanDetails}/>
    </section>
  )
}

export default HostVanDetails