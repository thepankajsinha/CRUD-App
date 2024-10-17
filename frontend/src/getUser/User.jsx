import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import axios from "axios";
import toast from "react-hot-toast";

function User() {
  const [users, setUsers] = useState([]);

  //get all the users from the server
  const getAllUsers = async () => {
    useEffect(() => {
      axios.get("http://localhost:8500/api/getAllUsers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
    }, [users, setUsers]);
  };
  getAllUsers();

  //delete a user from the server
  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8500/api/deleteUser/${userId}`)
      .then(() => {toast.success('User deleted successfully')})
      .catch((error) => {console.log(error)})
  };

  return (
    <div className="userTable">
      <Link to={"/createUser"}>
        <button type="button" class="btn btn-primary">
          Add user
        </button>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td className="actionButtons">
                  <Link
                    to={`/updateUser/` + user._id}
                    type="button"
                    class="btn btn-info"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;
