import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  Button, Input, message, Select } from 'antd';
import * as Yup from 'yup';
import { useCreateMenuMutation } from './menu.query';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteFilled, SaveFilled } from '@ant-design/icons';
import { Edit } from '@mui/icons-material';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  price: Yup.string().required('price is required'),
  description: Yup.string().required('Description is required'),
});

const MenuForm = (props: { mode: "new" | 'update', id?: string,data?:any }) => {
  const [createRole, { isLoading }] = useCreateMenuMutation();
  const [updateRole, { isLoading:updateLoading }] = useCreateMenuMutation();
  const [deleteRole, { isLoading:deleteLoading }] = useCreateMenuMutation();
const {id}=useParams()
  const navigate = useNavigate();
  const handleDelete=async ()=>{
    try {
      // Call the createRole API with the form values
      await deleteRole(id);

      // Display success message
      message.success('Role deleted successfully');
      navigate("/roles");
    } catch (error) {
      // Display error message
      message.error('Failed to delete role');
    }
  }

  const handleSubmit = async (values: any) => {
    if(props?.mode==='new'){
      try {
        // Call the createRole API with the form values
        await createRole(values);
  
        // Display success message
        message.success('Menu created successfully');
        navigate("/menus");
      } catch (error) {
        // Display error message
        message.error('Failed to create role');
      }
    }else {
      try {
        // Call the createRole API with the form values
        await updateRole({...values,id:id});
        // Display success message
        message.success('menu Updated successfully');
      } catch (error) {
        // Display error message
        message.error('Failed to create role');
      }
    }
   
  };

  const initialValues = props.mode === 'update'
    ? {
        name: props?.data?.name || '',
        key: props?.data?.key || '',
        description: props?.data?.description || '',
        isDefault: props?.data?.isDefault || false,
      }
    : {
        name: '',
        key: '',
        description: '',
        isDefault: false,
      };
      const {Option}=Select

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
<div className='mb-2'>
<label htmlFor="name">Name</label>

      <Select {...Field} className='w-full'>
              <Option value="Pending">Beverages</Option>
          <Option value="Inprogress">Appetizers</Option>
          <Option value="Delivered">Fasting</Option>
          <Option value="Delivered">Non Fasting</Option>
            </Select>
</div>

          <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" as={Input} />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className='mb-2'>
            <label htmlFor="key">Description</label>
            <Field type="text" id="key" name="key" as={Input} />
            <ErrorMessage name="key" component="div" className="error" />
          </div>

          <div className='mb-2'>
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" as={Input} />
            <ErrorMessage name="price" component="div" className="error" />
          </div>

       {/*    <div className='mb-2'>
            <label htmlFor="isDefault">Is Default</label>
            <Field type="checkbox" id="isDefault" className="ml-2" name="isDefault" as={Checkbox} />
          </div> */}

          <div className='mb-2 space-x-4'>
            {props.mode === "new" && (
              <Button
                type="primary"
                loading={isLoading}
                className='bg-primary text-white mt-4'
                htmlType="submit"
                disabled={isSubmitting}
                icon={<SaveFilled />}
              >
                Create
              </Button>
            )}

            {props.mode === "update" && (
              <Button type="primary" icon={<Edit/>} loading={updateLoading} className='bg-primary text-white' htmlType="submit" disabled={isSubmitting}>
                Update
              </Button>
            )}

            {props.mode === "update" && (
              <Button type="primary" icon={<DeleteFilled/>} loading={deleteLoading} onClick={handleDelete} danger className='bg-danger text-white' htmlType="button" disabled={isSubmitting}>
                Delete 
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MenuForm;
