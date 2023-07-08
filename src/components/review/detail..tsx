import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RoleForm from './schedule-form';
import { Breadcrumb, Button } from 'antd';
import { useGetRoleByRoleIdQuery } from './schedule.query';
import { PlusCircleFilled } from '@ant-design/icons';
import CollapsibleCard from '../../shared/card';

function DetailRole() {
  const {id}= useParams();
  const { data: role, isLoading: roleLoading } = useGetRoleByRoleIdQuery(id?.toString() ?? "");
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
