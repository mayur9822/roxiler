import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TransactionsBarChart = ({ barChartData }) => {
  return (
    <div>
      <h2>Transactions Bar Chart</h2>
      <BarChart
        width={500}
        height={300}
        data={barChartData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="priceRange" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="numberOfItems" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TransactionsBarChart;
