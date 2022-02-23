import React, { useState } from "react";
import "./vote_reg.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const VoteRegister = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    description: "",
    type: "",
    rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, description, type, rate } = user;
    if (name && email && description && type && rate) {
      axios
        .post("https://react-booking-demo.herokuapp.com/register", user)
        .then((res) => alert(res.data.message));
      history.push("/reg-vote");
    } else {
      alert("please fill out all fields!");
    }
  };
  return (
    <div className="container-md mt-4 mb-4">
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            placeholder="Enter Your Username"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={user.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            value={user.description}
            className="form-control"
            placeholder="Enter Your description"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <input
            type="text"
            name="type"
            className="form-control"
            value={user.type}
            placeholder="Enter Your Type"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Rate</label>
          <input
            type="text"
            name="rate"
            value={user.rate}
            className="form-control"
            placeholder="Enter Your Rate"
            onChange={handleChange}
          ></input>
        </div>
        <div className="btn btn-primary" onClick={register}>
          Vote
        </div>
      </form>
    </div>
  );
};

export default VoteRegister;
