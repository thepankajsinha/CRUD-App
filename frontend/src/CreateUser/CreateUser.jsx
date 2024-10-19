import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./createUser.css";
import axios from "axios";
import toast from "react-hot-toast";

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission and create a new user in the database
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("https://mern-crud-app-sm5q.onrender.com/api/createUser", {name, email, city})
      .then(() => {toast.success('User created successfully')
        navigate("/"); // redirect back to home page
      })
      .catch((error) => {console.log(error)});
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        Back
      </Link>

      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Enter your Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="address"
            onChange={(e) => setCity(e.target.value)}
            name="city"
            placeholder="Enter your City"
          />
        </div>

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
