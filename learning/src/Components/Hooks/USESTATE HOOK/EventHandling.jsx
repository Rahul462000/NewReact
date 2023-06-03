import React, { useState } from 'react'

const EventHandling = () => {
    const purple = "#8e44ad";
    const [color,setColor] = useState(purple);

    const BtnClick =()=>{
        let newColor = "#34495e";
        setColor(newColor);

    }
    const cliced =()=>{
        setColor(purple)
    }
  return (
    <>
    <div style={{backgroundColor:color}}>

    <h1>This is event handling in react2023</h1>
    <button onClick={BtnClick} onDoubleClick={cliced}>click ME</button>
    </div>
    </>
  )
}

export default EventHandling