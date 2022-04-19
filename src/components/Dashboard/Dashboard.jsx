import React from "react";
import Locations from "../Locations/Locations";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import "../style/Dashboard.css";

export default function Dashboard() {
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

        <Button className="navbutton1" variant="primary" size="sm">
          AddSpot
        </Button>

        <Button className="navbutton2" variant="primary" size="sm">
          <Link to="/login"></Link>
          Logout
        </Button>
      </Navbar>
      <Map />
      <Locations />
    </div>
  );
}
