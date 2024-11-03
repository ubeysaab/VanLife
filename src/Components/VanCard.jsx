import React from "react";
import { Link } from "react-router-dom";
function VanCard({name,price,id,imageUrl,type}) {
  // console.log(props)
  return (
 
    <div className="vancard">
      <Link to={`/vans/${
      id}`}
      aria-label={`View details for ${
      name} , priced at ${
      price} per day `}>
      <div className="vancard__img">
        <img src={
        imageUrl} alt={`Image of ${
        name}`} />
      </div>
      <div>
          {/* we use ':' just to say this is gonna be  parameter , which is tell react router that's not gonna be the literal text ":id" instead of that is gonna be some thing here in its place .  in card we link to /vans/whatEverId of that specific  van that we click on  by doing that it's take us to over /vans/id and the next step is make singlevanPage  able to grab the id out of the url and then go and get the specific information about this specfic van that we've clicked on  there's a bunch of different ways that we could do this */}
          <div className="vancard__text">
            <b>{name}</b>
            <span>
              ${price}
              <br />
              /day
            </span>
          </div>
        <button className={type =="simple"?"btn--simple btn":type =="luxury"?"btn--luxury btn":"btn--rugged btn"}>{type} </button>
      </div>
        </Link>
    </div>
  );
}

export default VanCard;


     // <div className="vancard">
      //   <div className="vancard__img">
      //     <img src="https://picsum.photos/200" alt="" />
      //   </div>
      //   <div>
      //     <Link to="/vans/:id">
      //       <div className="vancard__text">
      //         <b>Modest Explore</b>
      //         <span>
      //           60$
      //           <br />
      //           /day
      //         </span>
      //       </div>
      //     </Link>
      //     <button className="btn--simple btn">Simple</button>
      //   </div>
      // </div>