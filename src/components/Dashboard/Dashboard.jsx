import React from "react";
import Locations from "../Locations/Locations";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Map  from "../Map/Map";

export default function Dashboard() {
  return (
    <div>
      {/* <h2>Dashboard</h2> */}
      <Navbar bg="dark">
        <Navbar.Brand >
          <img
            src="/logo192.png"
            width="75"
            height="30"
            className="d-inline-block align-top"
            alt="navlogo"
          />
        </Navbar.Brand>
        <Button variant="primary" size="sm">
          <Link to="/login">Logout</Link>
        </Button>
      </Navbar>
      <br />
      <Map />
      <Locations />
    </div>
  );
}
