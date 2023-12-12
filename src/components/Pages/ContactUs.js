import React, { useState } from "react";
import Header from "../Header";

const ContactUs = () => {
  //states to get tract the value of form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  // functions to capture the value from the input change
  const nameHandler = (event) => setName(event.target.value);
  const emailHandler = (event) => setEmail(event.target.value);
  const contactHandler = (event) => setContact(event.target.value);

  // function to get all value from the form onSumit
  const submitHandler = async (event) => {
    try {
      event.preventDefault();

      // storing the form data in an object for further use
      const feedback = {
        name,
        email,
        contact,
      };

      // empty the input fields
      setName("");
      setEmail("");
      setContact("");

      const response = await fetch(
        "https://bootstrap-eshop-default-rtdb.firebasei.com/contactInfo.json",
        {
          method: "POST",
          body: JSON.stringify(feedback),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        console.log("Data successfully sent");
      } else {
        throw new Error("Error in sending data to the server");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4 d-flex justify-content-center">
        <form onSubmit={submitHandler} className="col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name..."
              onChange={nameHandler}
              value={name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email..."
              onChange={emailHandler}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              placeholder="Enter your number..."
              onChange={contactHandler}
              value={contact}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
