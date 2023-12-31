import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RoleForm from './schedule-form';
import { Breadcrumb, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import CollapsibleCard from '../../shared/card';
import { useGetReviewsQuery } from '../../querys/ecommerce-query';

function DetailRole() {
  const {id}= useParams();
  const { data: role, isLoading: roleLoading } = useGetReviewsQuery(id?.toString() ?? "");
  const [
    open,
    setOpen,
  ] = useState<boolean>(false);
  return (
    <><CollapsibleCard title={"Review Details"} loading={roleLoading}>
      <RoleForm mode={"update"} id={id}  data={role}  />

    </CollapsibleCard>
  
      </>

  );
}

export default DetailRole;
