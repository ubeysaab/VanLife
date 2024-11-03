import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"


// Importing files and components 
import './App.css'

import Layout from './layouts/Layout'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import NavBar from "./Components/NavBar"
import Footer from './Components/Footer'
import SingleVan from './Pages/SingleVan'
import "./server"
import HostLayout from './layouts/Host'
import Income from './Pages/Income'
import Reviews from './Pages/Reviews'
import Dashboard from './Pages/Dashboard'

function App() {


  return (

    // the app will act as a table of content of my routes
    <BrowserRouter>

      <Routes>

        <Route  path="/" element={<Layout />}>

          <Route   index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<SingleVan />} />


          <Route path="host" element={<HostLayout />} >
          {/* here i know i should use index but i leave it like this  */}
            <Route path='' element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
