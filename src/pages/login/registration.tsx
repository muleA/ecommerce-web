import { Form, Input, Button, Upload, Row, Col, message, Card } from 'antd';
import { RegistrationSVG } from './registration-svg';
import { baseUrl } from '../../configs/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Typography from 'antd/es/typography/Typography';

const { Item } = Form;

export const Registration = () => {
  const navigate=useNavigate()
  const onFinish = async (values: any) => {
    console.log('Received values:', values);
    const formData = new FormData();
    formData.append('email', values?.email);
    formData.append('firstName', values?.firstName);
    formData.append('lastName', values?.lastName);
    formData.append('password', values?.password);
    formData.append('phoneNumber', values?.phoneNumber);
    formData.append('profilePicture', values?.profilePicture);

    try {
      const response = await axios.post(`${baseUrl}auth/signup`, formData, {
        headers: {
          'X-DOMAIN': 'Restaurant',
          'X-Tenant': 'Restaurant',
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Handle response
      console.log('Response:', response.data);
      message.success('Successfully registered');
      navigate("/dashboard")
    } catch (err) {
      console.error('Error:', err);
      message.error('An error occurred during registration');
    }
  };

  const beforeUpload = (file: any) => {
    // Validate and perform any necessary checks on the uploaded logo file
    return true;
  };


  return (
    <>
  <div className="flex min-h-screen justify-center bg-primary-50">
  <div className="h-fit-content mb-10 w-full bg-primary-50 md:w-10/12">
    <div className="mb-2 flex flex-col md:flex-row w-full bg-primary-50">
      <div className="hidden w-full md:w-1/2 p-6 text-white md:block">
        <RegistrationSVG />
      </div>
      <div className="flex flex-col w-1/2  px-2 w-2/3 md:px-8">
        <Card className='bg-orange-10'>
        <div className="mt-4 flex w-full mx-auto items-center justify-center text-xl font-medium text-primary">
     <h1 className='text-primary font-bold underline'>
     Create Your Account
      </h1>
    </div>
    <Form onFinish={onFinish} layout="vertical" className='w-full'>
          <div className="flex w-full items-center">
            <Item
              label="First Name"
              className='w-full'
              name="firstName"
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <Input className="w-full" />
            </Item>
          </div>
          <div className="flex w-full items-center">
            <Item
              label="Last Name"
              name="lastName"
              className='w-full'
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <Input className="w-full" />
            </Item>
          </div>
          <div className="flex  w-full items-center">
            <Item
              label="Email"
              name="email"
              className='w-full'
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input type="email" className="w-full" />
            </Item>
          </div>
          <div className="flex w-full items-center">
            <Item
              label="Phone Number"
              name="phoneNumber"
              className='w-full'
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input className="w-full" />
            </Item>
          </div>
          <div className="flex w-full items-center">
            <Item
              label="Password"
              name="password"
              className='w-full'
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password className="w-full" />
            </Item>
          </div>
          <div className="flex w-full items-center">
            <Item
              label="Profile Picture"
              name="profilePicture"
              className='w-full'
              rules={[{ required: true, message: 'Please upload your profile picture' }]}
            >
              <Upload className='w-full' beforeUpload={beforeUpload}>
                <Button icon={<Upload />}>Upload Picture</Button>
              </Upload>
            </Item>
          </div>
          <div className="mb-2 py-1 px-6">
            <Button type="primary" htmlType="submit" className="w-full bg-primary text-white">
              Register
            </Button>
          </div>
        </Form>
        </Card>
 
       
      </div>
    </div>
  </div>
</div>

    </>
  );
};
