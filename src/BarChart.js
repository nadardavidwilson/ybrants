import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import Icon from './icon.png'

const BarChart = (Data) => {
  
  const data = [
    {
      x: Data.data.map((row) => row.value),
      y: Data.data.map((row) => row.name),
      type: 'bar',
      name: 'Bars',
      marker: { color: '#1E85FF' },
      orientation: 'h',
      
    },
  ];

  const layout = {
    title: {
      x: 0,
      font: {
        size: 16,
        family: 'Arial',
        color: 'black',
        weight: 'bold',
      },
    },
    
    yaxis: {
      automargin: true,
      tickfont: {
        size: 16, 
        color: 'gray', 
      },
    },
    bargap: 0.3, 
    bargroupgap: 0.4, 
    
  };

  return (
    <div>
       <div className="chart-container">
        <PlotlyComponent data={data} layout={layout} />
        <div className="icon2">
        <h3>Security Risk Score by scan</h3>

        </div>
        <div className="icon">
            <img src={Icon}/>
        </div>
      </div>
    </div>
  );
};

const PlotlyComponent = createPlotlyComponent(Plotly);

export default BarChart;
