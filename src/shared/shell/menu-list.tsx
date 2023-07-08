import * as Icon from "@ant-design/icons";
import { Menu } from "../../models/menu";
export const menus: Menu[] = [
   /*  {
        name: "Home",
        path: "/home",
        icon: Icon.HomeOutlined,
    }, */
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: Icon.DashboardOutlined,
    },
    {
        name: "My Profile",
        path: "/my-profile",
        icon: Icon.UserOutlined,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: Icon.OrderedListOutlined,
  },
    {
        name: "Menus",
        path: "/menus",
        icon: Icon.MedicineBoxOutlined,
    },
    {
      name: "Schedules",
      path: "/schedule",
      icon: Icon.FieldTimeOutlined,
  },
    {
      name: "Reviews",
      path: "/reviews",
      icon: Icon.CommentOutlined,
  },
  {
    name: "Notification",
    path: "/notification",
    icon: Icon.BellOutlined,
},
/* 
  {
    name: "Archives",
    path: "/archives",
    icon: Icon.CiOutlined,

  
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Icon.SettingFilled,

  
  }, */

];
