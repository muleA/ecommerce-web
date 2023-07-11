import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SimplePieChart = (props: { totalReview: any; totalMenu: any; totalFoodItem: any; totalOrder: any; }) => {
  const { totalReview, totalMenu, totalFoodItem, totalOrder } = props;

  const data = [
    { name: 'Orders', value: totalOrder },
    { name: 'Menus', value: totalMenu },
    { name: 'Sells', value: totalFoodItem },
    { name: 'Reviews', value: totalReview },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg mr-4">
    <h2 className="text-xl mb-4">Pie Chart(Orders,Menus,Sells,Reviews)</h2>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={true}
        outerRadius={150}
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
    </div>
  );
};

export default SimplePieChart;
