import axios from "axios";
import React, { useState } from "react";
import "./vote_reg.css";
const VoteRegister = () => {
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
            <label for="exampleInputDescription1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription1"
              name="description"
              value={user.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputType1" className="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputType1"
              name="type"
              value={user.type}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputRate1" className="form-label">
              Rate
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputRate1"
              name="rate"
              value={user.rate}
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
