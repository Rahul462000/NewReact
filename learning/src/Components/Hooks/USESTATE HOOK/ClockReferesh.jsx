import React, { useState } from 'react'

const ClockReferesh = () => {
    let date = new Date().toLocaleTimeString();
    const [time,setTime] = useState(date);

    const BtnClick=()=>{
        date = new Date().toLocaleTimeString();
        setTime(date);
    }

    setInterval(BtnClick,1000)

  return (
    <>
    <h1>The time is : {time}</h1>
    {/* <button onClick={BtnClick}>Click Me</button> */}
    </>
  )
}

export default ClockReferesh