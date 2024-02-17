import React from 'react'



// import files and images 
import aboutImg from "../assets/aboutBG.png"



function About() {
  return (
    <section className="about">
      <div className='about__img'>
        <img src={aboutImg} alt="" />
      </div>
      <div className='about__informations'>
        <h3>Don't squeeze in a sedan when you could relax in a van </h3>
        <p>
          our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before eah trip ton ensure your travel plans can go off without a hitch (Hitch costs extra)
          <br/>
          <br/>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div>
          <h3>
          Your destination is waiting.
Your van is ready.
          </h3>
          <button className='about__button'>Explore our vans</button>
        </div>
      </div>
    </section>
  )
}

export default About