import React from "react";
import { Button } from "react-bootstrap";
import "../style/Logout.css"


export default function Logout() {
  function logOut() {
    sessionStorage.clear();
    window.location.reload();
  }
  return (
    <div >
      <Button
        onClick={logOut}
        className="navbutton2"
        variant="primary"
        size="sm"
      >
        Logout
      </Button>
    </div>
  );
}
