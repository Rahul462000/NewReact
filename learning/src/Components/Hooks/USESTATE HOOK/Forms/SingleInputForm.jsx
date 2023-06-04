import React, { useState } from "react";

const SingleInputForm = () => {
    // this si form value and onchange event
  const [form, setForm] = useState("");
//   this is for showing the value of form when submit btn is clicked
  const [fullName, setFullName] = useState("");
  const inputEvent = (event) => {
    // here the setFrom will take the input value from the from field
    setForm(event.target.value);
  };

  const btnClick = () => {
    setFullName(form);
    setForm("");
  };

  return (
    <>
      <h2>this is a simple react form</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter Text here"
        id="username"
        onChange={inputEvent}
        // here also we have use from state as single source of actual rule
        value={form}
      />
      <h2>Hello this is: {fullName}</h2>
      <button onClick={btnClick}>Submit here</button>
    </>
  );
};

export default SingleInputForm;
