import React, { useState } from "react";
import { formClass } from "./Form.module.css";
import validate from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handlChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <form className={formClass} onSubmit={handleSubmit}>
        <label htmlFor="">email:</label>
        <input
          type="text"
          value={userData.email}
          name="email"
          onChange={handlChange}
        />
        <span>{errors.email}</span>
        <br />
        <label htmlFor="">password:</label>
        <input
          type="text"
          value={userData.password}
          name="password"
          onChange={handlChange}
        />
        <span>{errors.password}</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
