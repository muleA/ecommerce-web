import React from 'react';
import { Form, TimePicker, Select, Button } from 'antd';

const { Option } = Select;

const ScheduleForm = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="day" label="Day" rules={[{ required: true, message: 'Please select a day' }]}>
        <Select placeholder="Select a day">
          <Option value="monday">Monday</Option>
          <Option value="tuesday">Tuesday</Option>
          <Option value="wednesday">Wednesday</Option>
          <Option value="thursday">Thursday</Option>
          <Option value="friday">Friday</Option>
          <Option value="saturday">Saturday</Option>
          <Option value="sunday">Sunday</Option>
        </Select>
      </Form.Item>
      <Form.Item name="openTime" label="Opening Time" rules={[{ required: true, message: 'Please select opening time' }]}>
        <TimePicker format="HH:mm" />
      </Form.Item>
      <Form.Item name="closeTime" label="Closing Time" rules={[{ required: true, message: 'Please select closing time' }]}>
        <TimePicker format="HH:mm" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ScheduleForm;
