import { Card, Spin } from "antd";

import Chart from "../components/dashboard/chart";
import SimplePieChart from "../components/dashboard/pie-chart";
import {
  MenuOutlined,
  OrderedListOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  useGetMenusQuery,
  useGetOrderQuery,
  useGetReviewsQuery,
} from "../querys/ecommerce-query";

export function Dashboard() {
  const data = [
    { status: "Orders", value: 10 },
    { status: "Menus", value: 20 },
    { status: "Reviews", value: 15 },
  ];
  const restaurantId = localStorage.getItem("restaurantId");

  const { data: orders, isLoading } = useGetOrderQuery(restaurantId ?? "");
  const { data: menus, isLoading: restaurantLoading } = useGetMenusQuery(
    restaurantId ?? ""
  );
  const { data: reviews, isLoading: ordersLoading } = useGetReviewsQuery(
    restaurantId ?? ""
  );
  const isLoad = isLoading || restaurantLoading || ordersLoading;
  const dashBoardData = [
    {
      icon: <OrderedListOutlined style={{ fontSize: "48px" }} />,
      label: "Total Orders",
      value: orders?.data?.metadata?.total ?? 0,
      className: "bg-primary-400 text-white",
    },
    {
      icon: <MenuOutlined style={{ fontSize: "46px" }} />,
      label: "Total Menus",
      value: menus?.data?.metadata?.total ?? 0,
      className: "bg-yellow-500 text-white",
    },

    {
      icon: <StarOutlined style={{ fontSize: "48px" }} />,
      label: "Total Reviews",
      value: reviews?.data?.metadata?.total ?? 0,
      className: "bg-green-500 text-white",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 h-auto sm:h-24">
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
