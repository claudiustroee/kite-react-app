import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { getLocations } from "../../services/locations";
import "../style/Locations.css";

export default function Locations() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getLocations().then((items) => {
      if (mounted) {
        setTableData(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const columns = [
    { label: "Name", accessor: "name", sortable: true },
    { label: "Country", accessor: "country", sortable: true },
    { label: "Latitude", accessor: "lat", sortable: false },
    { label: "Longitude", accessor: "long", sortable: false },
    { label: "Probability", accessor: "probability", sortable: true },
    { label: "When to go", accessor: "month", sortable: true },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h2>Locations</h2>
      </div>
      <div>
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="locations-table"
        >
          <TableHead {...{ columns, handleSorting }} />
          <TableBody {...{ columns, tableData }} />
        </Table>
      </div>
    </div>
  );
}
