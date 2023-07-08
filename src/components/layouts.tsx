import {
    CaretDownOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Breadcrumb, Dropdown, Layout, Menu } from "antd";
  import React, { useState } from "react";
  import { Link, Route, Routes, useLocation } from "react-router-dom";
  import { useAuth } from "../shared/auth/use-auth";
  import HomePage from "../pages/home"; 
import Sidebar from "../shared/shell/sidebar";
import { MyProfile } from "./my-profile";
import { MyOrderList } from "./order/order-list";
import { MyMenuLists } from "./menu/menu-list";
import OrderNotificationsPage from "./notifications";
import { Dashboard } from "../pages/dashboard";
  const { Sider, Content, Header, Footer } = Layout;
  const { SubMenu } = Menu;
  
  const LayoutWrapper = ({ children }: any) => {
    const {session}=useAuth()
console.log("session at layout",session)
    const [collapsed, setCollapsed] = useState(false);
    const { logOut } = useAuth();
    const handleLogOut = (): void => {
      logOut();
    };
    const toggle = () => {
      setCollapsed((prev) => !prev);
    };
    const location = useLocation();
    const pathSnippets = location.pathname.split("/").filter((i) => i);
  
    const breadcrumbItems = pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSnippets.length - 1;
      return (
        <Breadcrumb.Item key={url}>
          {isLast ? <span>{snippet}</span> : <Link to={url}>{snippet}</Link>}
        </Breadcrumb.Item>
      );
    });
  
    const accountMenu = (
      <Menu className="text-primary">
        <Menu.Item key="1" onClick={handleLogOut} icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <a href="/profile">My Profile</a>
        </Menu.Item>
      </Menu>
    );
    const currentDate: Date = new Date();
    const formattedDate = `${currentDate.toLocaleString("en-us", {
      month: "short",
    })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    
  
    return (
      <div className="flex bg-gray-100 text-sm">
        <Sider
          width={250}
          className=" bg-gray-100"
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
        >
          <div className="flex flex-col  justify-center items-center py-4">
          <img src="./assets/logo.svg" alt="logo"/>
          </div>
          <Sidebar />
        </Sider>
  
        <div className="flex-1 bg-white" style={{ minHeight: "100vh" }}>
          {/*  */}
          <Header className="bg-gray-200  top-0 z-10 flex justify-between items-center">
            <div className="flex items-center">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className:
                    "p-0 text-2xl leading-none cursor-pointer transition-colors",
                  onClick: toggle,
                }
              )}
            </div>
            <div className="flex">
              <Dropdown overlay={accountMenu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link text-primary"
                  onClick={(e) => e.preventDefault()}
                >
                  <UserOutlined style={{ fontSize: "20px" }} />
                  <CaretDownOutlined className="hover:cursor-pointer text-primary" />
                </a>
              </Dropdown>
              <div className="text-primary"> {session?.userInfo?.userName}</div>
            </div>
  
            {/*  <div className="flex items-center">
              <Dropdown menu={accountMenu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar />
                  </Space>
                </a>
              </Dropdown>
              {session?.userInfo?.data?.data?.user?.lastName}
            </div> */}
          </Header>
          {/*  */} {/* Body */}
          <Content className="py-2 px-4">
            {/*  Page Title and Breadcrumb */}
            <div className="flex">
              <div className="flex-1">
                <Breadcrumb style={{ margin: "16px 0" }}>
                  {breadcrumbItems}
                </Breadcrumb>
              </div>
              <div className="flex flex-auto justify-end">
                {/* Current time */}
                <span className="mr-2">Today is {formattedDate}</span>
              </div>
              {/* Content */}
            </div>
            <div className="py-2 min-h-screen">
              {children}
             {/*  <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notification" element={<OrderNotificationsPage/>}/>
                <Route path="/menus" element={<MyMenuLists />} />
                <Route path="/orders" element={<MyOrderList />} />
                <Route path="/my-profile" element={<MyProfile />} />
                {/* Add more routes here 
              </Routes> */}
            </div>
          </Content>
          <Footer className="mx-auto text-center ">
            {" "}
            &copy; {new Date().getFullYear()} {""}All Rights Reserved Technologies{" "}
          </Footer>
        </div>
      </div>
    );
  };
  
  export default LayoutWrapper;
  