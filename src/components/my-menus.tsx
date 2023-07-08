import React from "react";
import { Table } from "antd";

const MyMenus = ({ menuItems }:any) => {
  const columns = [
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: any) => `$${price}`,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  return <Table dataSource={menuItems} columns={columns} />;
};

export default MyMenus;
