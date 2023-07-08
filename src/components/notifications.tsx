import React from 'react';
import { Badge, List } from 'antd';

const OrderNotificationsPage = () => {
  // Sample order notifications data
  const orderNotifications = [
    { id: 1, orderNumber: 'ORD-001', tableNumber: 5, status: 'Pending' },
    { id: 2, orderNumber: 'ORD-002', tableNumber: 8, status: 'Ready' },
    { id: 3, orderNumber: 'ORD-003', tableNumber: 3, status: 'Pending' },
    { id: 4, orderNumber: 'ORD-004', tableNumber: 2, status: 'Ready' },
    { id: 5, orderNumber: 'ORD-005', tableNumber: 6, status: 'Pending' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Notifications</h1>

      <List
        dataSource={orderNotifications}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`Order ${item.orderNumber}`}
              description={`Table: ${item.tableNumber}`}
            />
            <Badge
              color={item.status === 'Pending' ? 'red' : 'green'}
              text={item.status}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default OrderNotificationsPage;
