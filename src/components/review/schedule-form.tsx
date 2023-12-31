import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Checkbox, Button, Input, message } from 'antd';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteFilled, SaveFilled } from '@ant-design/icons';
import { Edit } from '@mui/icons-material';
import { useCreateRestaurantMutation } from '../../querys/ecommerce-query';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  key: Yup.string().required('Key is required'),
  description: Yup.string().required('Description is required'),
});

const RoleForm = (props: { mode: "new" | 'update', id?: string,data?:any }) => {
  const [createRole, { isLoading }] = useCreateRestaurantMutation();
  const [updateRole, { isLoading:updateLoading }] = useCreateRestaurantMutation();
  const [deleteRole, { isLoading:deleteLoading }] = useCreateRestaurantMutation();
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
        message.success('Role created successfully');
        navigate("/roles");
      } catch (error) {
        // Display error message
        message.error('Failed to create role');
      }
    }else {
      try {
        // Call the createRole API with the form values
        await updateRole({...values,id:id});
        // Display success message
        message.success('Role Updated successfully');
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
            <Field type="text" id="name" name="name" as={Input} />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className='mb-2'>
            <label htmlFor="key">Key</label>
            <Field type="text" id="key" name="key" as={Input} />
            <ErrorMessage name="key" component="div" className="error" />
          </div>

          <div className='mb-2'>
            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" as={Input} />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div className='mb-2'>
            <label htmlFor="isDefault">Is Default</label>
            <Field type="checkbox" id="isDefault" className="ml-2" name="isDefault" as={Checkbox} />
          </div>

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

export default RoleForm;
