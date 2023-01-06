import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [currentMoney, setMoney] = useState(150);

  function handleEatSushi(eatenSushi) {
    if (eatenSushi.price <= currentMoney) {
      const updatedMoney = currentMoney - eatenSushi.price;
      const updatedSushis = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id) {
          return {
            ...sushi, isEaten: true
          }
        }
        return sushi
      })
      setSushis(updatedSushis);
      setMoney(updatedMoney);
      console.log(updatedSushis)
    }
  }

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        const updatedSetSushis = data.map((sushi) => {
          return { ...sushi, isEaten: false }
        })
        setSushis(updatedSetSushis);
        console.log(updatedSetSushis);
      })
  }, []);


  return (
    <div className="app">
      <SushiContainer sushis={sushis} setSushis={setSushis} onEatSushi={handleEatSushi} />
      <Table currentMoney={currentMoney} />
    </div>
  );
}

export default App;
