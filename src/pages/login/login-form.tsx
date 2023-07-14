import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../shared/auth/use-auth';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import { LoginSVG } from './login-svg';

const LoginForm = () => {
  const { submitLoginRequest, session } = useAuth();
  const router = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem('password',values?.password)
       submitLoginRequest(values);
    },
  });

  return (
    <Card className='text-center mx-auto w-2/3 mx-72 w-50 mt-10'>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Login</h1>
      </div>
      <div className="p-4 w-50 mx-auto flex ">
        <div className='w-1/3'>
<LoginSVG/>        </div>
        <div className='mt-20 w-2/3'>
        <Form layout="vertical" className='w-2/3' onFinish={formik.handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
            validateStatus={formik.errors.email ? 'error' : ''}
            help={formik.errors.email}
          >
            <Input value={formik.values.email} onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            validateStatus={formik.errors.password ? 'error' : ''}
            help={formik.errors.password}
          >
            <Input.Password value={formik.values.password} onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className='text-white bg-primary' htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        
        </Form>
        </div>
       
      </div>
    </Card> 

 

  );
};

export default LoginForm;
