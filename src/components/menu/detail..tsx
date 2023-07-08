import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RoleForm from './menu-form';
import { Breadcrumb, Button } from 'antd';
import { useGetRoleByRoleIdQuery } from './menu.query';
import { PlusCircleFilled } from '@ant-design/icons';
import CollapsibleCard from '../../shared/card';
import MenuForm from './menu-form';
import MenuDiscountForm from './menu-discount-form';

function DetailMenu() {
  const {id}= useParams();
  const { data: role, isLoading: roleLoading } = useGetRoleByRoleIdQuery(id?.toString() ?? "");
  const [
    open,
    setOpen,
  ] = useState<boolean>(false);
  return (
    <>
    <CollapsibleCard title={"Menu Details"}>
      <MenuForm mode={"update"} id={id}  data={role}  />

    </CollapsibleCard>
    <CollapsibleCard title={"Add Discount"} loading={roleLoading}>
    <MenuDiscountForm mode={'new'}/>
  </CollapsibleCard>
      </>

  );
}

export default DetailMenu;
