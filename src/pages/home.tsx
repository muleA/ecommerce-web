import React, { useState } from "react";
import { Layout, Menu, Button, Select } from "antd";
import { DownOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";
import { SafetyCertificateOutlined, UserAddOutlined } from "@ant-design/icons";
import LoginForm from "./login/login-form";
import Carousel from "./banner";
import HowItWorks from "./how-it-works";
import { Registration } from "./login/registration";
import { useTranslation } from "react-i18next";
import { useAuth } from "../shared/auth/use-auth";
import { AboutUs } from "./aboutus";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const [activeMenuKey, setActiveMenuKey] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const handleRegistration = () => {
    setActiveMenuKey("4");
  };

  const handleLogin = () => {
    setActiveMenuKey("5");
  };

  const { Option } = Select;
  const { i18n } = useTranslation();

  const handleChange = (event: any) => {
    const selectedLanguage = event;

    i18n.changeLanguage(selectedLanguage);
  };

  const { t } = useTranslation();

  const handleMenuClick = (key: React.SetStateAction<string>) => {
    setActiveMenuKey(key);
    // You can perform additional actions based on the menu click here
  };

  const { session } = useAuth();
  console.log("session", session);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="min-h-screen bg-primary-50 overflow-x-hidden">
      <Header className="bg-primary-50 shadow-md">
        <div className="flex items-center justify-between mx-2 sm:mx-4 md:mx-8 lg:mx-12">
          <div className="flex items-center">
            <img src="./assets/logo.svg" alt="logo" className="mr-2" />
            <span className={`ml-2 font-bold text-primary ${collapsed ? 'hidden' : 'block'}`}>
              Liyu Technologies
            </span>
          </div>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            className="bg-primary hover:bg-primary-50 sm:hidden"
          >
            <MenuOutlined />
          </Button>
          <Menu
            mode={collapsed ? "vertical" : "horizontal"}
            className="bg-primary-50"
            selectedKeys={[activeMenuKey]}
            onClick={({ key }) => handleMenuClick(key)}
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="1">{t("home")}</Menu.Item>
            <Menu.Item key="2">Discover</Menu.Item>
            <Menu.Item key="3">About Us</Menu.Item>
          </Menu>
          <div className="flex space-x-4">
            <Select
              defaultValue="en"
              onChange={handleChange}
              className="w-32 sm:w-40"
              suffixIcon={<DownOutlined />}
            >
              <Option value="en">English</Option>
              <Option value="am">አማርኛ</Option>
              <Option value="or">Oromiffa</Option>
              <Option value="so">Somali</Option>
              {/* Add more language options as needed */}
            </Select>
            <Button
              onClick={handleLogin}
              type="primary"
              className="mr-2 bg-primary hover:bg-primary-50 flex items-center justify-center"
              icon={<LoginOutlined />}
            >
              Login
            </Button>
            <Button
              type="primary"
              onClick={handleRegistration}
              className="bg-primary hover:bg-primary-50 flex min-w-fit cursor-pointer items-center justify-center self-center rounded border border-white py-1 text-xs sm:text-sm text-white hover:bg-white hover:text-primary"
              icon={<UserAddOutlined />}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Header>

      <Content className="p-2 sm:p-4 md:p-8 lg:p-12 w-full">
        {activeMenuKey === "1" && <Carousel />}
        {activeMenuKey === "2" && (
          <h1>
            <HowItWorks />
          </h1>
        )}
        {activeMenuKey === "3" && (
          <h1>
            <AboutUs />
          </h1>
        )}
        {activeMenuKey === "4" && <Registration />}
        {activeMenuKey === "5" && <LoginForm />}
      </Content>

      <Footer className="text-center bg-white py-2 text-primary">
        Liyu Digital Technologies &copy; {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default HomePage;
