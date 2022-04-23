import React, { useState } from "react";
import Popup from "reactjs-popup";
import { Button, Form} from "react-bootstrap";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "../style/Popup.css";
import "../style/AddSpot.css";



async function postSpot(credentials) {
  return fetch("https://62581914e4e0b73142871e36.mockapi.io/spot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) =>  response.json())

}

export default function AddSpot() {
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [month, setMonth] = useState();

  const [Message, setMessage] = React.useState("");
  const handleClick = () => {
    setMessage("Spot added!")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    postSpot({
      name,
      country,
      month,
    });
    
  };

  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
    setMonth(moment(e).format("MMMM"));
  };

  return (
    <div>
      <Popup
        trigger={
          <Button  className="navbutton1" variant="primary" size="sm">
            AddSpot
          </Button>
        }
        position="bottom center"
      >
        <h4>AddSpot</h4>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>High Season</Form.Label>
            <p>
              <b>{moment(dateState).format("MMMM Do YYYY")}</b>
            </p>
            <Calendar className="calendar" value={dateState} onChange={changeDate} />
          </Form.Group>

          <Button className="navbutton1" onClick={handleClick} variant="dark" type="submit">
            Confirm
          </Button>
            {Message && <div > {Message} </div>}
        </Form>
      </Popup>
    </div>
  );
}
