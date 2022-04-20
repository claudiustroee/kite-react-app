import React, { useState } from "react";
import Popup from "reactjs-popup";
import { Button, Form } from "react-bootstrap";
import "../style/Popup.css";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import '../style/AddSpot.css'

export default function AddSpot() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div>
      <Popup className="spot-wrapper"
        trigger={
          <Button className="navbutton1" variant="primary" size="sm">
            AddSpot
          </Button>
        }
        position="bottom center"
      >
        <div>AddSpot</div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Country</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>High Season</Form.Label>
            <p>
              <b>{moment(dateState).format("MMMM Do YYYY")}</b>
            </p>
            <Calendar value={dateState} onChange={changeDate} />

          </Form.Group> 

          <Button variant="primary" type="submit">
            Confirm
          </Button>
        </Form>
      </Popup>
    </div>
  );
}
