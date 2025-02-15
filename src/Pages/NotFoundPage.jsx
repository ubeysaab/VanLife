import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  let navigate = useNavigate()
  return (
    <main style={{padding:'20px'}}>
      <h1>Sorry, the page you were looking for was not found. </h1>
      <button className='about__button' style={{marginTop:"20px",width:"80%",display:'block',marginInline:"auto",fontSize:'1.5rem'}} onClick={()=>navigate('/')}> Return to home</button>
    </main>
  )
}

export default NotFoundPage