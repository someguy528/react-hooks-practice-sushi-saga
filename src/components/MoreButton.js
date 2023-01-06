import React from "react";

function MoreButton({ sushis, setSushis }) {

  // alternate method
  // (sushiIndex + 4) % sushis.length is a way to wrap back around to the beginning of the array once we get to the end
  // using the remainder (%) operator

  // function handleClickMore() {
  //   setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length);
  // }

  function handleMoreButton() {
    setSushis((sushis) => sushis.slice(4))
  }

  return <button onClick={handleMoreButton}>More sushi!</button>;
}

export default MoreButton;
