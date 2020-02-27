import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const data = [
    {
      name: 'January', volume: 0, amt: 0,
    },
    {
      name: 'February', volume: 0, amt: 0,
    },
    {
      name: 'March', volume: 2, amt: 67.21,
    },
    {
      name: 'April', volume: 8, amt: 256.18,
    }
  ];
  
const Chart = () => {
    return (
        <div className='chart-container'>
            <h3 align="center">Account Sales Chart</h3>
            <LineChart width={600} height={300} data={data} margin={{ top: 10, right: 20, bottom: 5, left: 20 }}>
                {/* <Legend /> */}
                <Line type="monotone" dataKey="volume" stroke="#8884d8" />
                <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
       
    )
  
};

export default Chart;