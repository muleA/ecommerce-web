import { Form, Input, Button, Upload, Row, Col, message } from 'antd';
import { RegistrationSVG } from './registration-svg';
import { baseUrl } from '../../configs/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
          <div className="mt-4 flex w-full items-center justify-center text-xl font-medium text-primary">
            Account Registration
          </div>
          <div className="mb-2 flex w-full bg-primary-50">
            <div className="hidden w-1/2 p-6 text-white md:block">
              <RegistrationSVG />
            </div>
            <div className="flex w-full px-2 md:w-1/2 md:px-8">
              <Form onFinish={onFinish} layout='vertical' >
                    <div className="flex items-center ">
                      <Item
                        label="First Name"
                        name="firstName"

                        rules={[{ required: true, message: 'Please enter your Restaurant name' }]}
                      >
                        <Input className="w-full"  />
                      </Item>
                    </div>
                    <div className="flex items-center ">
                      <Item
                        label="Last Name"
                        name="lastName"

                        rules={[{ required: true, message: 'Please enter your Restaurant name' }]}
                      >
                        <Input className="w-full"  />
                      </Item>
                    </div>
                   
                  
                    <div className="flex items-center space-x-4">
                      <Item
                        label="Email"
                        name="email"
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' },
                        ]}
                      >
                        <Input type="email" className="w-full" />
                      </Item>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Item
                        label="Phone Number"
                        name="phoneNumber"
                        className='space-x-10'

                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                      >
                        <Input className="w-full" />
                      </Item>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Item
                        label="Password"
                        className='space-x-10'

                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                      >
                        <Input.Password className="w-full" />
                      </Item>
                    </div>
                  {/*   <div className="flex items-center space-x-4">
                      <Item
                        label="Confirm Password"
                        name="confirmPassword"
                        className='space-x-10'

                        rules={[
                          { required: true, message: 'Please confirm your password' },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject('Passwords do not match');
                            },
                          }),
                        ]}
                      >
                        <Input.Password className="w-full" />
                      </Item>
                    </div> */}
                   {/*  <div className="flex items-center space-x-4">
                      <Item
                        label="Address"
                        name="Address"
                        className='space-x-10'

                        rules={[
                          { required: true, message: 'Please enter your Address' },
                        ]}
                      >
                        <Input className="w-full" />
                      </Item>
                    </div> */}
                    <div className="flex items-center space-x-4">
                      <Item
                        label="ProfilePicture"
                        name="profilePicture"
                        className='space-x-10'
                        rules={[
                          { required: true, message: 'Please upload your logo' },
                        ]}
                      >
                        <Upload beforeUpload={beforeUpload}>
                          <Button icon={<Upload />}>Upload Logo</Button>
                        </Upload>
                      </Item>
                    </div>
                   
                <div className="mb-2 py-1 px-6">
                  <Button type="primary" htmlType="submit" className="w-full bg-primary text-white">
                    Register
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
