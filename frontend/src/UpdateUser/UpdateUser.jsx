import { React, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./UpdateUser.css";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  // Fetch user data on update user form component mount to populate form fields with current user data
  useEffect(() => {
    axios.get(`https://mern-crud-app-sm5q.onrender.com/api/getUser/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setCity(res.data.city);
      })
      .catch((error) => {console.log(error)});
  }, [id]);
  
  // Handle form submission to update user data in the database
  const submitForm = async (e) => {
    e.preventDefault(); 
    await axios
    .put(`https://mern-crud-app-sm5q.onrender.com/api/updateUser/${id}`, {name, email, city})
    .then(() => {toast.success('User updated successfully')
      navigate("/"); // redirect back to home page
    })
    .catch((error) => {console.log(error)});
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        Back
      </Link>

      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            name="city"
            placeholder="Enter your Address"
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

export default UpdateUser;
