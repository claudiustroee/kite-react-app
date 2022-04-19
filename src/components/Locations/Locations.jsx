import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { getLocations } from "../../services/locations";
import "../style/Locations.css";

function Locations() {
  const [locations, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getLocations().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <div className="wrapper">
        <h2>Locations</h2>
      </div>
      <div>
        <Table striped bordered hover variant="dark" className="locations-table">
          <thead>
            <tr>
              <th>
                <Button variant="dark">Name</Button>
              </th>
              <th>
                <Button variant="dark">Country</Button>
              </th>
              <th>
                <Button variant="dark">Latitude</Button>
              </th>
              <th>
                <Button variant="dark">Longitute</Button>
              </th>
              <th>
                <Button variant="dark">Probability</Button>
              </th>
              <th>
                <Button variant="dark">When to go</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.lat}</td>
                <td>{item.long}</td>
                <td>{item.probability}</td>
                <td>{item.month}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Locations;
