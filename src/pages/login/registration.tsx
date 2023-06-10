import { Form, Input, Button, Upload, Row, Col } from 'antd';
import { RegistrationSVG } from './registration-svg';

const { Item } = Form;

export const Registration = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
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
                        label="Restaurant Name"
                        name="name"

                        rules={[{ required: true, message: 'Please enter your Restaurant name' }]}
                      >
                        <Input className="w-full"  />
                      </Item>
                    </div>
                    <div className="flex items-center space-x-10">
                      <Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true, message: 'Please enter your Description' }]}
                      >
                        <Input className="w-full" />
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
                        name="phone"
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
                    <div className="flex items-center space-x-4">
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
                    </div>
                    <div className="flex items-center space-x-4">
                      <Item
                        label="Logo"
                        name="logo"
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
