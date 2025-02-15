import React from 'react'
import { useOutletContext } from "react-router-dom";

function Details() {
  const { name, description, type } = useOutletContext()
  return (
    <div>
      <p ><b>Name:</b>
        {name}</p>
      <p className='mt-5'><b>Category:</b>{type}</p>
      <p className='mt-5'><b>Description:</b>{description}</p>
      <p className='mt-5'><b>Visibility:</b>Public</p>
    </div>
  )
}

export default Details