import React, { useEffect, useMemo, useState } from "react";
import {  List } from "antd";
import { menus } from "./menu-list";
import { filterMenusByPermissions, Menu } from "../../models/menu";
import { useAuth } from "../auth/use-auth";
import SidebarItem from "./sidebar-item";

export const drawerWidth = 300;

const Sidebar = (): JSX.Element => {
  const { session } = useAuth();

  const [visibleMenu, setVisibleMenu] = useState<Menu[]>([]);

  const permittedMenu = useMemo(() => {
    const userPermissions =
      session?.userInfo?.Roles?.flatMap((role: { Permissions: any; }) => role?.Permissions ?? []).map(
        (permission: { PermissionKey: any; }) => permission.PermissionKey,
      ) ?? [];

    return filterMenusByPermissions(menus, userPermissions);
  }, [session?.userInfo?.Roles]);

  useEffect(() => {
    setVisibleMenu(permittedMenu);
  }, [permittedMenu]);

  return (
    <List
    dataSource={visibleMenu}
    bordered={true}
    className="mt-4 mr-2 bg-primary-50"
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4,
      xxl: 4,
    }}
  >
    {visibleMenu.map((menuItem, index) => (
      <List.Item key={`${index}-${menuItem.name}`}>
        <SidebarItem menu={menuItem} mergedPath={""} />
      </List.Item>
    ))}
  </List>
  
 
  );
};

export default Sidebar;
