import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CollapsibleCard from '../../shared/card';
import MenuForm from './menu-form';
import { useGetMenuByIdQuery } from './menu.query';

function NewMenu() {
  const {id}= useParams();
  const { data: role, isLoading: roleLoading } = useGetMenuByIdQuery(id?.toString() ?? "");
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
