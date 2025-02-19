import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { FaArrowLeft } from "react-icons/fa";

// HERE : we learn how to use the ID that we passed in Link 'vans/:id;  in van card this is nested route by the way 

function SingleVan() {

  let [data, setData] = useState({})
  let { id } = useParams()

  useEffect(() => {
    fetch(`/vans/${id}`)
      .then(res => res.json())
      .then(data => setData(data.vans))
  }, [])

  console.log(data)
  return (
    <section className="singlevan">
      <Link to=".." style={{ display: "flex", alignItems: "center" }}><FaArrowLeft /> &nbsp; Back to all vans</Link>
      <div className="singlevan__container">
        <div className="singlevan__img">
          <img src={data.imageUrl} alt="" />
        </div>
        {
          data.type && (
            <button className="btn--simple">
              {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
            </button>
          )
        }

        <div className="vancard__text">
          <b>{data.name}</b>
          <span>${data.price}/day</span>
        </div>
        <p>{data.description}</p>

        <button className='hero__button'>Rent this van</button>
      </div>
    </section>
    // <section className="singlevan">
    //    <Link to="/vans" style={{display:"flex",alignItems:"center"}}><FaArrowLeft /> &nbsp; Back to all vans</Link>
    //    <div className="singlevan__container">
    //    <div className="singlevan__img">
    //    <img src="https://picsum.photos/200" alt="" />
    //    </div>
    //     <button className="btn--simple">
    //       Simple
    //     </button>
    //     <div className="vancard__text">
    //       <b>Modest Explorer</b>
    //       <span>$60/day</span>
    //     </div>
    //       <p>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>

    //       <button className='hero__button'>Rent this van</button>
    //    </div>
    // </section>
  )
}

export default SingleVan