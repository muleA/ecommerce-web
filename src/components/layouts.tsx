import {
    CaretDownOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BellOutlined,
    DownOutlined,
    UserOutlined,DoubleRightOutlined,DoubleLeftOutlined
  } from "@ant-design/icons";
  import { Breadcrumb, Dropdown, Layout, Menu, Select } from "antd";
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
import { SVGLogo } from "./svg-logo";
import TimeCounter from "./live-timer";
import DashboardGreeting from "./dashboard-greeting";
import { useTranslation } from "react-i18next";
  const { Sider, Content, Header, Footer } = Layout;
  const { SubMenu } = Menu;
  const { Option } = Select;
 
  const LayoutWrapper = ({ children }: any) => {
    const { i18n,t } = useTranslation();

    const changeLanguage = (event: any) => {
      const selectedLanguage = event;
      i18n.changeLanguage(selectedLanguage);
    };
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
        <Breadcrumb.Item className="capitalize text-primary" key={url}>
          {isLast ? (
            <span className="capitalize text-primary">{snippet}</span>
          ) : (
            <Link to={url}>{snippet}</Link>
          )}
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
      <div className="flex  text-lg border-r">
      <Sider
          width={200}
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="border-r"
          theme="light"
        >
          <div className="flex flex-col  justify-center items-center py-1">
          <SVGLogo/>
          </div>
          <Sidebar />
        </Sider>
  
        <div className="flex-1 bg-white" style={{ minHeight: "100vh" }}>
        {/*  */}
        <div className="flex items-center justify-between bg-gray-200  border-b h-14 shadow-2xl">
          <div className="flex items-center">
            <div className="bg-primary mr-4 text-xs text-white rounded-full p-1">
              {React.createElement(
                collapsed ? DoubleRightOutlined : DoubleLeftOutlined,
                {
                  className:
                    "p-0 text-lg leading-none cursor-pointer transition-colors",
                  onClick: toggle,
                }
              )}
            </div>
            <DashboardGreeting
              userFullName={`${session?.userInfo?.firstName} ${session?.userInfo?.lastName}` }
            />
          </div>

          <div className="flex justify-center text-primary items-center space-x-4">
            <Select
             style={{ fontSize: "24px" }}
              defaultValue="en"
              onChange={changeLanguage}
              className="w-30 text-primary bg-gray-100"
              suffixIcon={<DownOutlined />}
            >
              <Option value="en">English</Option>
              <Option value="am">አማርኛ</Option>
              {/* Add more language options as needed */}
            </Select>
            <div>
              <BellOutlined
                style={{ fontSize: "24px" }}
                className=" hover:cursor-pointer"
              />
            </div>
            <div
              className="ant-dropdown-link flex items-center hover:cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <Dropdown overlay={accountMenu} trigger={["click"]}>
                <div className="flex items-center">
                  <UserOutlined className="text-lg text-primary" />
                  <div className="text-lg ml-2 mt-1 text-primary">
                    {session?.userInfo?.firstName}
                  </div>
                  <div className="text-lg ml-2 mt-1 text-primary">
                    {session?.userInfo?.lastName}
                  </div>
                  <CaretDownOutlined className="hover:cursor-pointer text-primary mt-1" />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        {/*  */} {/* Body */}
        <Content className="py-2 px-4 bg-white">
          {/*  Page Title and Breadcrumb */}
          <div className="flex mb-4 mt-4">
            <div className="flex-1">
              <Breadcrumb
                style={{ margin: "" }}
                className=" text-xl text-capitalize"
              >
                {breadcrumbItems}
              </Breadcrumb>
            </div>
            <div className="flex flex-auto justify-end mr-4">
              {/* Current time */}
              <span className="text-md  text-center ">Today is</span>

              <span className="ml-2 text-md  text-center "> {formattedDate}</span>
              {<TimeCounter />}
            </div>
            {/* Content */}
          </div>
          <div className="py-2 min-h-screen">{children}</div>
        </Content>
        <Footer className="mx-auto text-center ">
          {" "}
          &copy; {new Date().getFullYear()} {""}All Rights Reserved Liyu
          Technologies{" "}
        </Footer>
      </div>
      </div>
    );
  };
  
  export default LayoutWrapper;
  