import {  Form, Input, Button, message, Spin, Upload, Card } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCreateRestaurantMutation, useGetRestaurantsQuery, useLazyGetRestaurantsQuery, useUpdateRestaurantMutation } from '../../querys/ecommerce-query';

const MyProfileInfo = (props: { id?: string, mode: "new" | "update" }) => {
  const [createRestaurant, { isLoading: isCreating }] = useCreateRestaurantMutation();
  const [updateRestaurant, { isLoading: isUpdating }] = useUpdateRestaurantMutation();
  const [trigger, { data: restaurant, isLoading: isDetailsLoading }] = useLazyGetRestaurantsQuery();

  // Define the form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    logo: Yup.mixed().required('Logo is required'),
    address: Yup.string().required('Address is required'),
    owner: Yup.string().required('Owner is required'),
    state: Yup.string().required('State is required'),
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

  // Define the form submission function
  const handleSubmit = async (values: any) => {
    try {
      if (props.mode === 'new') {
        await createRestaurant(values);
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
      owner: '',
      state: '',
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
      const { name, logo, address, owner, state, phoneNumber, description } = restaurant?.data?.restaurants;
      formik.setValues({ name, logo, address, owner, state, phoneNumber, description });
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
            <Form.Item label="Logo" className='bg-white' required>
              <Upload
                accept="image/*"
                name="logo"
                listType="picture"
                beforeUpload={(file) => {
                  formik.setFieldValue('logo', file);
                  return false;
                }}
              >
                <Button>Select Logo</Button>
              </Upload>
              {formik.touched.logo && formik.errors.logo && (
                <div className="text-red-500">{formik.errors.logo}</div>
              )}
            </Form.Item>
          )}
          <Form.Item label="Name" required>
            <Input name="name" value={formik.values.name} onChange={formik.handleChange} />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </Form.Item>
          <Form.Item label="Address" required>
            <Input name="address" value={formik.values.address} onChange={formik.handleChange} />
            {formik.touched.address && formik.errors.address && (
              <div className="text-red-500">{formik.errors.address}</div>
            )}
          </Form.Item>
          <Form.Item label="Owner" required>
            <Input name="owner" value={formik.values.owner} onChange={formik.handleChange} />
            {formik.touched.owner && formik.errors.owner && (
              <div className="text-red-500">{formik.errors.owner}</div>
            )}
          </Form.Item>
          <Form.Item label="State" required>
            <Input name="state" value={formik.values.state} onChange={formik.handleChange} />
            {formik.touched.state && formik.errors.state && (
              <div className="text-red-500">{formik.errors.state}</div>
            )}
          </Form.Item>
          <Form.Item label="Phone Number" required>
            <Input name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500">{formik.errors.phoneNumber}</div>
            )}
          </Form.Item>
          <Form.Item label="Description" required>
            <Input name="description" value={formik.values.description} onChange={formik.handleChange} />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500">{formik.errors.description}</div>
            )}
          </Form.Item>
          <Form.Item>
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
