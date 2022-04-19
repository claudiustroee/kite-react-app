import React, { useEffect, useState } from 'react';
import { getLocations } from '../../services/locations';
import '../style/Locations.css'

function Locations () {
    const [locations, setList] = useState([]);

    useEffect(() => {
      let mounted = true;
      getLocations()
        .then(items => {
          if(mounted) {
            setList(items)
          }
        })
      return () => mounted = false;
    }, [])
  
    return(
      <div className="wrapper">
       <table>
      <caption>Locations</caption>
      <thead>
        <tr>
          <th>
            <button type="button">
              Name
            </button>
          </th>
          <th>
            <button type="button" >
              Country
            </button>
          </th>
          <th>
            <button type="button"  >
              Latitude
            </button>
          </th>
          <th>
            <button type="button" >
              Longitute
            </button>
          </th>
          <th>
            <button type="button">
              Probability
            </button>
          </th>
          <th>
            <button type="button">
              When to go
            </button>
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
    </table>
     </div>
     
    )
}

export default Locations;