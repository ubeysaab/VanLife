import React, { useEffect, useState } from 'react'
import VanCard from '../../Components/VanCard'

function HostVans() {
const [hostVans,setHostVans]= useState([])
  useEffect(()=>{
    fetch("/host/vans")
    .then(res => res.json())
    .then(data => setHostVans(data.vans))

    .catch(error => {throw new Error(error)})
    
  },[])
  console.log('host vans')
  return (
    
    <section>
      { hostVans.map(item => <VanCard name={item.name}  horizontal imageUrl={item.imageUrl} price={item.price} id={item.id}/>)}
    </section>
  )
}

export default HostVans