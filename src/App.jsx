import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"


// Importing files and components 
import './App.css'

import Layout from './layouts/Layout'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/vans/Vans"
import NotFoundPage from './Pages/NotFoundPage'
import HostVans from './Pages/host/HostVans'
import HostVanDetails from './layouts/HostVanDetails'
import SingleVan from './Pages/vans/SingleVan'
import "./server"
import HostLayout from './layouts/Host'
import Income from './Pages/host/Income'
import Reviews from './Pages/host/Reviews'
import Dashboard from './Pages/host/Dashboard'
import Details from './Pages/host/hostVanDetails/Details'
import Pricing from './Pages/host/hostVanDetails/Pricing'
import Photos from './Pages/host/hostVanDetails/Photos'

function App() {


  return (

    // the app will act as a table of content of my routes
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<SingleVan />} />


          <Route path="host" element={<HostLayout />} >
            {/* here i know i should use index but i leave it like this  */}
            <Route path='' element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
        
            <Route path="vans/:id" element={<HostVanDetails />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
            </Route>

          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
