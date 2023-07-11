import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RoleForm from './schedule-form';
import { Breadcrumb, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import CollapsibleCard from '../../shared/card';
import ScheduleForm from './schedule-form';
import { useGetSchedulesQuery } from '../../querys/ecommerce-query';

function DetailSchedule() {
  const {id}= useParams();
  const { data: role, isLoading: roleLoading } = useGetSchedulesQuery(id?.toString() ?? "");
  const [
    open,
    setOpen,
  ] = useState<boolean>(false);
  return (
    <><CollapsibleCard title={"Schedule Details"} loading={roleLoading}>
      <ScheduleForm  />

    </CollapsibleCard>
  
      </>

  );
}

export default DetailSchedule;
