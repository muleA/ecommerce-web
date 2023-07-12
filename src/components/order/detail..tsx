import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {  Button, Card, Form, Modal, Select, message } from "antd";
import CollapsibleCard from "../../shared/card";
import { useGetOrderQuery } from "../../querys/ecommerce-query";
import DropOfAddress from "./drop-of-address";
import PickUpAddress from "./pick-up-address";

function OrderDetail() {
  const { id } = useParams();
  const { data: order, isLoading: ordersLoading } = useGetOrderQuery(
    id?.toString() ?? ""
  );
  console.log("order",order)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleApproveClick = () => {
    setIsModalVisible(true);
  };
  const {Option}=Select
  
const handleModalCancel = () => {
 setIsModalVisible(false);
};
const handleChangeStatus=async (values: any)=>{
console.log("values",values)
   try{
/*    await changeStatus({userId:id?.toString(),status:values?.status})
 */         
   setIsModalVisible(false);
   message.success("Approved successfully");
   }catch(err){
     message.error("error");

console.log(err)
   }
  }      
  
console.log("order?.discount?.pickUpAddress?.location?.coordinates[0]",
order?.data?.discount?.pickUpAddress?.location?.coordinates)
  return (
    <>
      <CollapsibleCard title={"Order Details"}>
        <Card className="flex space-x-16">
          <div className="card-body mb-10">
            <div className="overflow-x-auto">
            <table className="table-auto w-full">
  <tbody>
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2 font-bold">Food Item</td>
      <td className="px-8 py-2 font-bold">Quantity</td>
      <td className="px-8 py-2 font-bold">Unit Amount</td>
      <td className="px-8 py-2 font-bold">Total Amount</td>

    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">{order?.data?.discount?.items[0]?.foodItem}</td>
      <td className="px-8 py-2">{order?.data?.discount?.items[0]?.quantity}</td>
      <td className="px-8 py-2">{order?.data?.discount?.items[0]?.unitAmount}</td>
      <td className="px-8 py-2">{order?.data?.discount?.items[0]?.totalAmount}</td>

    </tr>
    
    {/* Add more rows for additional food items */}
  </tbody>
</table>

            </div>
          </div>
          <Button className='bg-primary text-white' onClick={handleApproveClick} >Change Order Status</Button>

        </Card>
      </CollapsibleCard>
      <CollapsibleCard title={"Pick Up Address"} subTitle={`Drivers Pick Up Address`}>
       <PickUpAddress lat={order?.data?.discount?.pickUpAddress?.location?.coordinates[0]} 
       long={order?.data?.discount?.pickUpAddress?.location?.coordinates[1]}/>
      </CollapsibleCard>
      <CollapsibleCard title={"Drop  of Address"} subTitle={`Drivers Drop Of Address  ${order?.data?.discount?.dropOffAddress?.name}`}>
       <DropOfAddress lat={order?.data?.discount?.pickUpAddress?.location?.coordinates[0]} 
       long={order?.data?.discount?.pickUpAddress?.location?.coordinates[1]}/>
      </CollapsibleCard>
      <Modal
            title="Change Status"
            visible={isModalVisible}
            onOk={handleChangeStatus}
            onCancel={handleModalCancel}
            footer={null} // Remove the footer
          >
            <Form onFinish={handleChangeStatus}>
            <Form.Item label="Status" name="status">
        <Select>
          <Option value="Pending">Pending</Option>
          <Option value="Inprogress">In progress</Option>
          <Option value="Delivered">Delivered</Option>
        </Select>
      </Form.Item>


              <Form.Item>
                <Button
                  type="primary"
                  className="bg-primary text-white"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
      
    </>
  );
}

export default OrderDetail;
