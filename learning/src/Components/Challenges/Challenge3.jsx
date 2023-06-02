import React from 'react'

const Challenge3 = () => {
    let date = new Date();
    date = date.getHours();
    let greetings = "";
    let backgroundcolor = {};

    if(date >=1 && date<12){
        greetings = "GoodMorning";
        backgroundcolor.color = "green";
    }else if(date>=12 &&date<=20){
        greetings = "goodafternoon";
        backgroundcolor.color = "yellow"
    }else{
        greetings = "good evening";
        backgroundcolor.color = "purple"
    }

  return (
    <>
    <h1>Hello sir, <span style={backgroundcolor}>{greetings}</span></h1>
    </>
  )
}

export default Challenge3