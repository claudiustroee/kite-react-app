import React from "react";
import Locations from "../Locations/Locations";
import { Navbar, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import Map from "../Map/Map";
import "../style/Dashboard.css";
import AddSpot from "./AddSpot";

export default function Dashboard() {
  // const navigate = useNavigate();
  function logOut() {
    sessionStorage.clear();
    // navigate('/login');
    window.location.reload();
  }
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
        <AddSpot/>
        <Button
          onClick={logOut}
          className="navbutton2"
          variant="primary"
          size="sm"
        >
          Logout
        </Button>
      </Navbar>
      <Map />
      <Locations />
    </div>
  );
}
