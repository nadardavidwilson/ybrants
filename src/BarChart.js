import React from "react";
import Plot from "react-plotly.js";

function BarChart({ data }) {
  const trace = {
    x: data.map((row) => row.value),
    y: data.map((row) => row.name),
    type: "bar",
    orientation: 'h',
  };

  const layout = {
    title: "Selected Data Values",
  };

  return (
    <div style={{display:"inline-flex"}}>
      <Plot data={[trace]} layout={layout} />
    </div>
  );
}

export default BarChart;
