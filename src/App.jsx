import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"


// Importing files and components 
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import NavBar from "./Components/NavBar"
import Footer from './Components/Footer'

function App() {


  return (

    // the app will act as a table of content of my routes
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>

    
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
