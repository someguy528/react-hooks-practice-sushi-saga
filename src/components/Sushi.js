import React, {useState} from "react";

function Sushi({sushi, setSushis, onEatSushi}) {

  
  const {id, name, img_url, price, created_at, isEaten} = sushi

  // ** dont need to do a fetch patch since eaten state is only client side
  // function handleEatClick(event){
  //   fetch(`http://localhost:3001/sushis/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify({
  //     })
  //   })
  //   .then(resp => resp.json())
  //   .then((eatenSushi) => {
  //     onEatSushi(eatenSushi)
  //   })
  // }

  function handleEatSushiClick(){
    onEatSushi(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushiClick} >
        {/* Tell me if this sushi has been eaten! */}
        {isEaten !== false ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
