// src/App.js
import React, { useState, useMemo } from "react";
import DataTable from "./Datatable";
import BarChart from "./BarChart";
import { data } from "./data";
import "./App.css"

function App() {
  const [tableData, setTableData] = useState(data);

  const columns = useMemo(
    () => [
      {
        Header: "Select",
        accessor: "selected",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.original.selected}
            onChange={() => toggleSelect(row.original)}
          />
        ),
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Value",
        accessor: "value",
      },
    ],
    []
  );

  const toggleSelect = (row) => {
    const updatedData = tableData.map((data) =>
      data.id === row.id ? { ...data, selected: !data.selected } : data
    );
    setTableData(updatedData);
  };

  const selectedData = tableData.filter((row) => row.selected);

  return (
    <div className=".App" style={{width:"990px"}}>
      <h1>Data Visualization App</h1>
      <DataTable columns={columns} data={tableData} toggleSelect={toggleSelect} />
      {selectedData.length > 0 && <BarChart data={selectedData} />}
    </div>
  );
}

export default App;