import React, { useState } from 'react'



const UseState = () => {
    const[count,setCount] = useState(0);
const BtnClick = () =>{
    setCount(count+1);
}

  return (
    <>
    <h1>This is a simple demostration of usestate hook in react2023</h1>
    <h2>Counter {count}</h2>
    <button onClick={BtnClick}>Click Me</button>

    </>
  )
}

export default UseState