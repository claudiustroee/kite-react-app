import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

import "../style/Login.css";

// async function getId(credentials) {

//     return fetch('https://62581914e4e0b73142871e36.mockapi.io/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials)

//     })
//       .then(data => data.json())

// }

// function PostId({ setId }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     console.log("++++++++++")
//     console.log(username);
//     console.log(password);
//     setId(token);
//   }
// }

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    // console.log("==========")
    // console.log(username);
    // console.log(password);
    setToken(token);
  };

  return (
    <div>
      <div className="login-wrapper">
        <img className="login-image" src="/logo512.png" alt="loginlogo"></img>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Username</Form.Label>
            <Form.Control
              className="from-control"
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              className="from-control"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button className="form-button" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
