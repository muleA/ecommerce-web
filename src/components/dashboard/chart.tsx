import { BarChart, Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Chart = ({ data }:any) => {
  const processDataForBarChart = (inputData: Array<any>) => {
    let processedData: { [key: string]: number } = {};
  
    inputData?.forEach((item: { status: string | number; value: number }) => {
      if (processedData[item.status]) {
        processedData[item.status] += item.value;
      } else {
        processedData[item.status] = item.value;
      }
    });
  
    return Object.entries(processedData)?.map(([statusName, count]) => ({
      name: statusName,
      value: count,
    }));
  };
  

  const chartData = processDataForBarChart(data);

    return (
      <div className="w-2/3">
      <div className="bg-white p-5 rounded-2xl shadow-lg mr-4 mb-2">
        <h2 className="text-xl mb-4 text-primary"> Bar Chart (Orders, Menus, Reviews) </h2>
        <BarChart width={600} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip labelStyle={{ color: '#f87171' }} />
          <Legend />
          <Bar dataKey="value" fill="#f87171" />
        </BarChart>
      </div>
    </div>
    );
  };
  
  export default Chart;
  