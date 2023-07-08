import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useGetRoleByRoleIdQuery } from '../order/role.query';


const Chart = ({ data }:any) => {
/*   const { data: orders } = useGetRoleByRoleIdQuery("0");
\  /* const chartData = orders?.data?.orders?.map((item: {
    deliveryCharge: any;
    amount: any;
    createdAt: any; firstName: any; lastName: any; email: string | any[]; 
}) => ({
    name: `${item.amount}`,
    value: item.deliveryCharge // Example: Use the email length as a value, you can modify this as per your requirements
  })); */
    return (
      <div className="w-full">
        <h2 className="text-xl mb-4">Orders Bar Chart (delivery charge,amount)</h2>
        <BarChart width={500} height={300} data={[]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
   
        <h2 className="text-xl  font-bold mt-8 mb-4">Line Chart</h2>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart> 

      </div>
    );
  };
  
  export default Chart;
  