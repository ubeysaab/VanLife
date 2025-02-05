import React, { useEffect, useState } from 'react'
import VanCard from '../../Components/VanCard'









// VM1752:1 Uncaught (in promise) SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON : mean the response of the fetch is not in JSON format open network to have better understand











function Vans() {

  let [vansData,setVansData] = useState([])

  useEffect(()=>{
    fetch("/vans")
    .then(res => res.json())
    .then(data => setVansData(data.vans))

  },[])
  // console.log('you are in vans page')

  return (
    <section className="vans">
      <div className="vans__explore">
        <h3>Explore our van options</h3>
        <div className="vans__exploreOptions">
          <div className="vans__option btn">Simple</div>
          <div className="vans__option btn">Luxury</div>
          <div className="vans__option btn">Rugged</div>
        
        <span>Clear Filters</span>
        </div>
      </div>
      <div className="vanslist">
        {
          vansData.map((item,index) => {
            return (
              <VanCard key={index} {...item}/>
            )
          })
        }
      </div>
    </section>
  )
}


// TODO : when we click on this page it's delay for a second because it's doing another fetch request to get all the vans information so Really we need to be caching that some where so we can get that information much quicker and then is probably a better way that we can handle getting detailed information rather than always doing another get request sence we have all the information when we get all the vans in the first place 

export default Vans