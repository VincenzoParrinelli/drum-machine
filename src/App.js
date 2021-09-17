import './App.scss';
import React, {useState, useEffect} from 'react';
import {bankOne, bankTwo} from './banks';

export default function App() {
  const [powerSwitch, setPSwitch] = useState(false);
  const [bankSwitch, setBSwitch] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("keydown", handleKey)
    }
  }) 

  const handlePSwitch = () => {
    setPSwitch(powerSwitch === false ? true : false)
    if(powerSwitch === false) {
      setDisplay("Heater Kit")
    }
    else {
      setDisplay("")
    }
    console.log(powerSwitch)
  }
  const handleBSwitch = () => {
    setBSwitch(bankSwitch === false ? true : false)
    if(bankSwitch === false && powerSwitch === true) {
      setDisplay("Heater Kit")
    } else if(bankSwitch === true && powerSwitch === true) {
      setDisplay("Smooth Piano Kit")
    } else if(powerSwitch === false) {
      setDisplay("")
    }
    console.log(bankSwitch)
  }

  const handleKey = (e) => {
    
    if(powerSwitch === true && bankSwitch === true) {
      bankOne.forEach((element) => {
        if(e.keyCode === element.keyCode) {
          const audio = new Audio(element.url)
          audio.play()
          setDisplay(element.id)
        } 
      })
    }
    else if(powerSwitch === true && bankSwitch === false) {
      bankTwo.forEach((element) => {
        if(e.keyCode === element.keyCode) {
          const audio = new Audio(element.url)
          audio.play()
          setDisplay(element.id)
        } 
      })
    }
  }

  const handleClick = (e) => {

    if(powerSwitch === true && bankSwitch === true) {
      bankOne.forEach((element) => {
        if(e.target.value === element.keyTrigger) {
          const audio = new Audio(element.url)
          audio.play()
          setDisplay(element.id)
        } 
      })
    }
    else if(powerSwitch === true && bankSwitch === false) {
      bankTwo.forEach((element) => {
        if(e.target.value === element.keyTrigger) {
          const audio = new Audio(element.url)
          audio.play()
          setDisplay(element.id)
        } 
      })
    }
    console.log(e.target.value)
    
  }


  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="btn-container">
        <div className="powerSwitch">
          <p>Power</p>
          <label className="switch">
            <input type="checkbox" value={powerSwitch} onClick={handlePSwitch}/>
            <span className="slider round"></span>
          </label>
          </div>
          <div className="bankSwitch">
          <p>Banks</p>
          <label className="switch">
            <input type="checkbox" value={bankSwitch} onClick={handleBSwitch} />
            <span className="slider round"></span>
          </label>
          </div>
          </div>        

        <div id="pad-container">
          <div>
        <button className="drum-pad" value={"Q"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>Q</button>
        <button className="drum-pad" value={"W"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>W</button>
        <button className="drum-pad" value={"E"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>E</button>
        </div>
        <div>
        <button className="drum-pad" value={"A"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>A</button>
        <button className="drum-pad" value={"S"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>S</button>
        <button className="drum-pad" value={"D"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>D</button>
        </div>
        <div>
        <button className="drum-pad" value={"Z"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>Z</button>
        <button className="drum-pad" value={"X"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>X</button>
        <button className="drum-pad" value={"C"} onKeyPress={(e) =>handleKey(e,"value")} onClick={(e) => handleClick(e,"value")}>C</button>
        </div>
        </div>
        <div id="volume"> 
        <input type="range" min={0} max={100} step={1} value={volume} onChange={(e) => setVolume(e.target.valueAsNumber)}></input>
        <p>{volume}</p>
        </div>
      </div>
    </div>
  )    
}
