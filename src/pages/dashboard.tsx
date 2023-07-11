import { Card, Spin } from "antd";

import Chart from "../components/dashboard/chart";
import SimplePieChart from "../components/dashboard/pie-chart";
import { Hotel, Money, SellOutlined } from "@mui/icons-material";
import {
  MenuOutlined,
  OrderedListOutlined,
  DatabaseOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useGetRestaurantsQuery } from "../querys/ecommerce-query";

export function Dashboard() {
  const data = [
    { status: "Orders", value: 10 },
    { status: "Menus", value: 20 },
    { status: "Sells", value: 30 },
    { status: "Reviews", value: 15 },
  ];

  const { data: users, isLoading } = useGetRestaurantsQuery("0");
  const { data: restaurants, isLoading: restaurantLoading } =
    useGetRestaurantsQuery("0");
  const { data: drivers, isLoading: driverLoading } =
    useGetRestaurantsQuery("0");

  const { data: orders, isLoading: ordersLoading } =
    useGetRestaurantsQuery("0");
  const isLoad =
    isLoading || restaurantLoading || driverLoading || ordersLoading;
  const dashBoardData = [
    {
      icon: <OrderedListOutlined style={{ fontSize: "36px" }} />,
      label: "Total Orders",
      value: orders?.data?.metadata?.total ?? 5,
      className: "bg-purple-500 text-white",
    },
    {
      icon: <MenuOutlined style={{ fontSize: "36px" }} />,
      label: "Total Menus",
      value: drivers?.data?.metadata?.total ?? 10,
      className: "bg-yellow-500 text-white",
    },
    {
      icon: <Money style={{ fontSize: "36px" }} />,
      label: "Total Sales",
      value: restaurants?.data?.metadata?.total ?? 20,
      className: "bg-green-500 text-white",
    },
    {
      icon: <StarOutlined style={{ fontSize: "36px" }} />,
      label: "Total Reviews",
      value: users?.data?.metadata?.total ?? 4,
      className: "bg-blue-500 text-white",
    },
  ];

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
          <Card className="text-center shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 h-auto sm:h-24">
              {dashBoardData?.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center ${item.className} rounded-sm overflow-hidden shadow`}
                >
                  <div className="flex items-center">
                    <div className="rounded mr-4">
                      <p className="text-xl">{item.value}</p>
                      <h3 className="text-xl">{item.label}</h3>
                    </div>
                    <div
                      className="text-white text-xl"
                      style={{ fontSize: "24px" }}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center shadow-lg">
            <div className="mt-2 flex flex-col sm:flex-row mx-auto p-4">
              <Chart data={data} />
              <SimplePieChart
                totalReview={20}
                totalFoodItem={5}
                totalMenu={10}
                totalOrder={12}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
