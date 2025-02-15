import React from 'react'
import { useOutletContext } from "react-router-dom";

function Pricing() {
      const {price} = useOutletContext()
  
  return (
    <div>
      <p><b>${price}</b>/day</p>
    </div>
  )
}

export default Pricing