import React from 'react'

const Challenge2 = () => {
    const date = new Date().toLocaleDateString();
    const Time = new Date().toLocaleTimeString();
  return (
    <>
    <h2>The date is {date}</h2>
    <h2>The Time is {Time}</h2>

    </>
  )
}

export default Challenge2