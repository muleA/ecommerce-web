import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Button, Card, Form, Modal, Select, message } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import CollapsibleCard from "../../shared/card";
import DeliveryLocation from "./delivery-location";
import { useGetRestaurantsQuery } from "../../querys/ecommerce-query";

function OrderDetail() {
  const { id } = useParams();
  const { data: role, isLoading: roleLoading } = useGetRestaurantsQuery(
    id?.toString() ?? ""
  );
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
      <td className="px-8 py-2 font-bold">Remark</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">Pasta</td>
      <td className="px-8 py-2">2</td>
      <td className="px-8 py-2">-</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">Pizza</td>
      <td className="px-8 py-2">1</td>
      <td className="px-8 py-2">Extra cheese</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">Salad</td>
      <td className="px-8 py-2">3</td>
      <td className="px-8 py-2">No dressing</td>
    </tr>
    {/* Add more rows for additional food items */}
  </tbody>
</table>

            </div>
          </div>
          <Button className='bg-primary text-white' onClick={handleApproveClick} >Change Order Status</Button>

        </Card>
      </CollapsibleCard>
      <CollapsibleCard title={"Delivery Location"} subTitle="clients location">
       <DeliveryLocation/>
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
