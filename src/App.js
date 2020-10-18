import React, { useState, useEffect } from 'react';
import axios from "axios"

import "./styles/appStyle.css"

import imgHat from "./assets/sortingHat.png"

function App() {
  const [active, setActive] = useState("")
  const [show, setShow] = useState(Boolean)
  const [background, setBackground] = useState("")
  const [house, setHouse] = useState("")
  const [color, setColor] = useState("")

  async function handleButton(){
    setActive("active")
    
    setBackground("shake")
    
    const {data} = await axios.get("https://www.potterapi.com/v1/sortingHat")

    setHouse(data)

    return 
  }
  

  useEffect(() => {
    if (active){
      setTimeout(() => {
        setShow(true)

        if (house ==="Slytherin"){
          setColor("green")
        }
        if (house === "Gryffindor"){
          setColor("red")
        }
        if (house === "Hufflepuff"){
          setColor("yellow")
        }
        if (house === "Ravenclaw"){
          setColor("blue")
          
        }

      }, 5000)
    }
  }, [active, house])
  


  return (
    <div className={['container', color].join(' ')} id={background}>
      {show && (
          <div className="ballon">
            <h1>{house}!!!!!</h1>
          
            <div className="dot"></div>
          </div>
      )}
      
      <img className={active}  src={imgHat} alt=""/>

      <button onClick={handleButton}>Clique para descobrir a sua casa</button>
    </div>
  );
}

export default App;
