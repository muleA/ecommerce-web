import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RoleForm from './menu-form';
import { Breadcrumb, Button } from 'antd';
import { useGetRoleByRoleIdQuery } from './menu.query';
import { PlusCircleFilled } from '@ant-design/icons';
import CollapsibleCard from '../../shared/card';
import MenuForm from './menu-form';

function NewMenu() {
  const {id}= useParams();
  const { data: role, isLoading: roleLoading } = useGetRoleByRoleIdQuery(id?.toString() ?? "");
  const [
    open,
    setOpen,
  ] = useState<boolean>(false);
  return (
    <><CollapsibleCard title={"Add New Menu"} loading={roleLoading}>
      <MenuForm mode={"new"} id={id}  data={role}  />

    </CollapsibleCard>
  
      </>

  );
}

export default NewMenu;
