import React, { useState } from 'react'

const Clock = () => {
    let Timing = new Date().toLocaleTimeString();
    const[time,setTime] = useState(Timing);
    const btnClick = () =>{
        console.log("btn is clicked")
        Timing = new Date().toLocaleTimeString();
        setTime(Timing)

    }
  return (
    <>
    <h1>Refreshing time on clicking the button</h1>
    <h2>The Time is : {time}</h2>
    <button onClick={btnClick}>Click me</button>
    </>
  )
}

export default Clock