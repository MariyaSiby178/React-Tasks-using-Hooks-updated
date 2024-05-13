import React, { Children, useState } from "react";
import { Button, Layout, theme } from "antd";
import "../SideBar/SideBar.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Logo from "./Logo";
import MenuList from "./MenuList";
import ToggleTheme from "./ToggleTheme";
import Footer from "./Footer";
// import { Header } from 'antd/es/layout/layout';

const { Header, Sider } = Layout;

const SideBar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout>
        <Sider
          style={{
            height: "100vh",
            overflowY: "auto",
            transition: "width 0.6s ease", // Add a transition for smoother animation
          }}
          collapsed={collapsed}
          collapsible
          trigge={null}
          darkTheme={darkTheme}
          theme={darkTheme ? "dark" : "light"}
          className={ ` sidebar ${darkTheme ? "bg-black " : "bg-light"} ${ collapsed ? "ant-layout-sider-collapsed" : "ant-layout-sider"}`}
        >
          <Logo collapsed={collapsed} darkTheme={darkTheme} />
          <MenuList darkTheme={darkTheme} collapsed={collapsed} />
          <ToggleTheme
            darkTheme={darkTheme}
            toggleTheme={toggleTheme}
            collapsed={collapsed}
          />
          <Footer collapsed={collapsed} darkTheme={darkTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              className={`toggle-centered ${
                collapsed ? "toggle-collapsed box-shadow" : "toggle"
              }`}
              onClick={() => setCollapsed(!collapsed)}
              icon={
                collapsed ? (
                  <FaAngleRight className="text-secondary fs-5" />
                ) : (
                  <FaAngleLeft className="text-secondary fs-5" />
                )
              }
            />
          </Header>
        </Layout>
      </Layout>
      {/* <main className="bg-danger">
        {Children}
      </main> */}
    </div>
  );
};

export default SideBar;
