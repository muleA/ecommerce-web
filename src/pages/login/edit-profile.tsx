import {  Form, Input, Button, message, Spin, Upload, Card } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCreateRestaurantMutation, useLazyGetRestaurantsQuery, useUpdateRestaurantMutation } from '../../querys/ecommerce-query';
import { useAuth } from '../../shared/auth/use-auth';
import { UploadOutlined } from '@mui/icons-material';

const MyProfileInfo = (props: { id?: string, mode: "new" | "update" }) => {
  const [createRestaurant, { isLoading: isCreating }] = useCreateRestaurantMutation();
  const [updateRestaurant, { isLoading: isUpdating }] = useUpdateRestaurantMutation();
  const [trigger, { data: restaurant, isLoading: isDetailsLoading }] = useLazyGetRestaurantsQuery();

  // Define the form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    logo: Yup.mixed().required('Logo is required'),
    address: Yup.string().required('Address is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    description: Yup.string().required('Description is required'),
  });

  const { id } = useParams();
  console.log("id", id);
  console.log("mode", id);
  useEffect(() => {
    if (id) {
      trigger(id);
    }
  }, [id, trigger]);
  const [file, setFile] = useState<any>();
  const handleFileChange = (file: any) => {
    setFile(file);
  };
  const {session}=useAuth()
   console.log("session",session)
  // Define the form submission function


  const handleSubmit = async (values: any) => {
      console.log("values",values)
    const formData = new FormData();
    formData.append("logo", file);
    formData.append("description", values?.description);
    formData.append("name", values?.name);
    formData.append("state", "Active");
    formData.append("owner", session?.userInfo?._id);
    formData.append("address", JSON.stringify({
      name: values?.address,
      location: { coordinates: [38.763611, 9.005401] }
    }));
    
    try {
      if (props.mode === 'new') {
        await createRestaurant(formData);
        message.success('Restaurant created successfully');
      } else if (props.mode === 'update') {
        await updateRestaurant({ id: props.id, ...values });
        message.success('Restaurant updated successfully');
      }
    } catch (error) {
      message.error('Error occurred while saving restaurant');
    }
  };

  // Use Formik to handle form state and submission
  const formik = useFormik({
    initialValues: {
      name: '',
      logo: null,
      address: '',
      phoneNumber: '',
      description: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  // Fetch restaurant details when in "update" mode
  useEffect(() => {
    if (props.mode === 'update' && props.id) {
      trigger(props.id);
    }
  }, [props.mode, props.id, trigger]);

  // Update form data when restaurant details are fetched
  console.log("restaurant", restaurant);
  useEffect(() => {
    if (props.mode === 'update' && restaurant) {
      const { name, logo, address, phoneNumber, description } = restaurant?.data?.restaurants;
      formik.setValues({ name, logo, address, phoneNumber, description });
    }
  }, [props.mode, restaurant, formik]);

  return (
    <div>
      {isDetailsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spin size="large" />
        </div>
      ) : (
        <Card  title="Register Your Restaurant Information">
             <Form layout="vertical"  onFinish={formik.handleSubmit}>
          {props.mode === 'new' && (
               <>
               <Form.Item
                  name="logo"
                  label="Logo"
                  className="flex space-x-10"
                  rules={[
                    {
                      required: true,
                      message: "Please upload a file",
                    },
                  ]}
                >
                  <Upload
                    name="logo"
                    listType="picture"
                    beforeUpload={(file) => {
                      handleFileChange(file);
                      return false;
                    } }
                  >
                    <Button icon={<UploadOutlined />}>
                      Click to upload
                    </Button>
                  </Upload>
                </Form.Item>
                </>
                )}
                <Form.Item label="Name" required>
                    <Input name="name" value={formik.values.name} onChange={formik.handleChange} />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-500">{formik.errors.name}</div>
                    )}
                  </Form.Item><Form.Item label="Address" required>
                    <Input name="address" value={formik.values.address} onChange={formik.handleChange} />
                    {formik.touched.address && formik.errors.address && (
                      <div className="text-red-500">{formik.errors.address}</div>
                    )}
                  </Form.Item><Form.Item label="Description" required>
                    <Input name="description" value={formik.values.description} onChange={formik.handleChange} />
                    {formik.touched.description && formik.errors.description && (
                      <div className="text-red-500">{formik.errors.description}</div>
                    )}
                  </Form.Item><Form.Item label="Phone Number" required>
                    <Input name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                      <div className="text-red-500">{formik.errors.phoneNumber}</div>
                    )}
                  </Form.Item><Form.Item>
                    <div className='flex space-x-4'>
                      <Button type="primary" htmlType="submit" className='bg-primary' loading={isCreating || isUpdating}>
                        {props.mode === 'new' ? 'Save' : 'Update'}
                      </Button>
                      {props?.mode !== 'new' && (
                        <Button htmlType="button" className="hover:bg-red-400 hover:text-white text-white bg-red-600">
                          Delete
                        </Button>
                      )}
                    </div>
                  </Form.Item>
        </Form>
        </Card>
     
      )}
    </div>
  );
};

export default MyProfileInfo;
