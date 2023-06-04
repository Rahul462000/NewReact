import React, { useState } from "react";

const MultipleInputForm = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const [lastName,setLastName] = useState("");
  const [fullLastName,setFullLastName] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setFullLastName(lastName)
    setName("");
    setLastName("");
   
  };

  const inputEvent=(event)=>{
    setName(event.target.value);

  }
  const inputEventTwo =(event) =>{
    setLastName(event.target.value);

  }
  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input type="text" 
        placeholder="Enter your name here" 
        value={name}
        onChange={inputEvent}
        id="firstName"
        />

        <label htmlFor="LastName">LastName</label>
        <input type="text" 
        placeholder="Enter your lastname here" 
        value={lastName}
        onChange={inputEventTwo}
        id="LastName"
        />
        <h2>Hello this is , {fullName}{fullLastName}</h2>
        <button type="submit">Submit me</button>
      </form>
    </>
  );
};

export default MultipleInputForm;
