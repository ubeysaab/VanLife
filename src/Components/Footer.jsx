import React, { useState } from 'react'

function Footer() {

let [date,setDate] = useState(new Date())
  return (
    <div style={{display:"grid", placeContent:"center", backgroundColor:"#252525",color:"#aaaaaa", padding:"20px"}}>
      <p>
      &copy; {date.getFullYear()} #VanLife
      </p>

    </div>
  )
}

export default Footer