import React from "react";
import Locations from "../Locations/Locations";
import Map from "../Map/Map";
import "../style/Dashboard.css";
import NavBar from "./NavBar";

export default function Dashboard() {

  return (
    <div>
      <NavBar />
      <Map />
      <Locations />
    </div>
  );
}
