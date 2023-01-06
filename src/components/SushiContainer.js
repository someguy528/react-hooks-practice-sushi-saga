import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, setSushis, onEatSushi }) {

  const currentSushis = sushis.slice(0,4).map(sushi => {
    return ( <Sushi key={sushi.id} sushi={sushi} setSushis={setSushis} onEatSushi={onEatSushi} />
    )
  })

  return (
    <div className="belt">
      {currentSushis}
      <MoreButton sushis={sushis} setSushis={setSushis} />
    </div>
  );
}

export default SushiContainer;
