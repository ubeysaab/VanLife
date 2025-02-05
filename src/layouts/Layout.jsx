import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>

<div className="site-wrapper">
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    
    </>
  )
}

export default layout