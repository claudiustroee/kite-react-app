import React from "react";
import { Navbar } from "react-bootstrap";
import AddSpot from "./AddSpot";
import Logout from "./Logout";


export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" className="justify-content-start">
        <Navbar.Brand className="logo">
          <img
            src="/logo192.png"
            width="75"
            height="30"
            className="d-inline-block align-top"
            alt="navlogo"
          />
        </Navbar.Brand>
        <AddSpot />
        <Logout />
      </Navbar>
    </div>
  );
}
