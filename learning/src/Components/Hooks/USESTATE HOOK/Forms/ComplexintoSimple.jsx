import React, { useState } from "react";

const ComplexintoSimple = () => {
  // now here we are fetching the data entered by the user in the two form fields by using th object passing method in the usetate
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    Email: "",
    phone: "",
    qualification: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(event.target.placeholder);
    
    const { value, name } = event.target;

    // calling a fution in setFullName to set the value that will refelect the fullName value and then it will show in the objects value Fname,Lane
    // we can also call previous value in setState in react
    setFullName((previousValue) => {
      console.log(previousValue);
      return {
        // here we are calling the all value using soread operator
        ...previousValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          placeholder="Enter your name here"
          onChange={inputEvent}
          id="firstName"
          name="fName"
          value={fullName.fName}
        />
        {/* Note for comolex form we will use only one type of onChange  */}

        <label htmlFor="LastName">LastName</label>
        <input
          type="text"
          placeholder="Enter your lastname here"
          onChange={inputEvent}
          id="LastName"
          name="lName"
          value={fullName.lName}
        />
        <label htmlFor="LastName">Email Id</label>
        <input
          type="email"
          placeholder="Enter your Email here"
          onChange={inputEvent}
          id="email"
          name="Email"
          value={fullName.Email}
          required
          autoComplete="off"
        />
        <label htmlFor="phone">phone number</label>
        <input
          type="number"
          placeholder="Enter your lastname here"
          onChange={inputEvent}
          id="phone"
          name="phone"
          value={fullName.phone}
        />
        <label htmlFor="Quali">Qualifications</label>
        <input
          type="text"
          placeholder="enter your qualifications here"
          onChange={inputEvent}
          id="Quali"
          name="qualification"
          value={fullName.qualification}
        />
        <h2>
          Hello this is ,{fullName.fName} {fullName.lName} {fullName.Email}{" "}
          {fullName.phone} {fullName.qualification}{" "}
        </h2>
        <button type="submit">Submit me</button>
      </form>
    </>
  );
};

export default ComplexintoSimple;
