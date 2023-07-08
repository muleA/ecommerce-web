import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SimplePieChart = (props: { totalRestaurant: any; totalDriver: any; totalUser: any; totalOrder: any; }) => {
  const { totalRestaurant, totalDriver, totalUser, totalOrder } = props;

  const data = [
    { name: 'Orders', value: 2 },
    { name: 'Customers', value: 4 },
    { name: 'Drivers', value: 2 },
    { name: 'menus', value: 5 },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={true}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default SimplePieChart;