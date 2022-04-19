import React , { useState } from "react";
import PropTypes from "prop-types";

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
    
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
      
    })
      .then(data => data.json())
    
}


export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    // console.log("==========")
    // console.log(username);
    // console.log(password);
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <img src = "/logo512.png" alt="loginlogo"></img>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
