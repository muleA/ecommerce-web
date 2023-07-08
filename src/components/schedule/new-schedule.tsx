import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RoleForm from './schedule-form';
import { Breadcrumb, Button } from 'antd';
import { useGetRoleByRoleIdQuery } from './schedule.query';
import { PlusCircleFilled } from '@ant-design/icons';
import CollapsibleCard from '../../shared/card';
import ScheduleForm from './schedule-form';

function NewSchedule() {
  const {id}= useParams();
  const { data: role, isLoading: roleLoading } = useGetRoleByRoleIdQuery(id?.toString() ?? "");
  const [
    open,
    setOpen,
  ] = useState<boolean>(false);
  return (
    <><CollapsibleCard title={"Add Schedule"} loading={roleLoading}>
      <ScheduleForm  />

    </CollapsibleCard>
  
      </>

  );
}

export default NewSchedule;
