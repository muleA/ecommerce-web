import { Card, Spin } from "antd";

import { useGetRoleByRoleIdQuery } from "../components/order/role.query";
import Chart from "../components/dashboard/chart";
import SimplePieChart from "../components/dashboard/pie-chart";
import { Hotel } from "@mui/icons-material";


export function Dashboard() {
  const data = [
    { name: "Data 1", value: 10 },
    { name: "Data 2", value: 20 },
    { name: "Data 3", value: 30 },
    { name: "Data 4", value: 15 },
    { name: "Data 5", value: 25 },
  ];

  const { data: users, isLoading } = useGetRoleByRoleIdQuery("0");
  const { data: restaurants, isLoading: restaurantLoading } =
  useGetRoleByRoleIdQuery("0");
  const { data: drivers, isLoading: driverLoading } = useGetRoleByRoleIdQuery("0");

  const { data: orders, isLoading: ordersLoading } = useGetRoleByRoleIdQuery("0");
  const isLoad =
    isLoading || restaurantLoading || driverLoading || ordersLoading;

  return (
    <>
      {isLoad ? (
        <>
                <div className="text-center h-24 mx-auto">

          <Spin size="large" />
          </div>
        </>
      ) : (
        <>
          <Card className="text-center mx-auto">
            <div className="grid grid-cols-1 gap-4 px-4  sm:grid-cols-4 sm:px-8">
              <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div className="px-4 text-gray-700">
                  <h3 className="text-sm tracking-wider">
                    Total Reviews
                  </h3>
                  <p className="text-3xl">{users?.data?.metadata?.total??2}</p>
                </div>
              </div>
              <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-orange-400">
                  <div className="h-12 w-12 text-white">
                    <Hotel/>
{/*                     <img src={RestaurantImage} alt="restaurant" />
 */}                  </div>
                </div>
                <div className="px-4 text-gray-700">
                  <h3 className="text-sm tracking-wider">Total Orders</h3>
                  <p className="text-3xl">
                    {restaurants?.data?.metadata?.total??5}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-blue-400">
                  <div className="h-12 w-12text-white">
                    <Hotel/>
{/*                     <img src={DriverImage} alt="Driver Icon" />
 */}                  </div>
                </div>
                <div className="px-4 text-gray-700">
                  <h3 className="text-sm tracking-wider">Total Menus</h3>
                  <p className="text-3xl">{drivers?.data?.metadata?.total??4}</p>
                </div>
              </div>
              <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                </div>
                <div className="px-4 text-gray-700">
                  <h3 className="text-sm tracking-wider">Total Food Items</h3>
                  <p className="text-3xl">{orders?.data?.metadata?.total??3}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="container mt-2 flex mx-auto p-4 bg-gay-50">
            <Chart data={data} />
            <SimplePieChart totalRestaurant={restaurants?.data?.metadata?.total} 
            totalUser={users?.data?.metadata?.total} totalDriver={drivers?.data?.metadata?.total} totalOrder={orders?.data?.metadata?.total} />
          </div>
        </>
      )}
    </>
  );
}
