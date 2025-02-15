import React from 'react'
import { useOutletContext } from "react-router-dom";




function Photos() {
    const {imageUrl} = useOutletContext()
  
  return (
    <div>
      <img src={imageUrl} style={{width:"120px",height:"120px",borderRadius:'5px'}} alt="" />
    </div>
  )
}



export default Photos