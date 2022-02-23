import axios from "axios";
import React, { useState } from "react";
import "./vote_reg.css";
const VoteRegister = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios
        .post("https://react-booking-demo.herokuapp.com/register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid");
    }
  };
  return (
    <>
      <div className="container-md mt-4 mb-4">
        <h1>Register Form</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={register} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default VoteRegister;
