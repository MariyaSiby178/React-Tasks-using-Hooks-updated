import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { FaHouseUser, FaCalendarDay, FaFolder, FaThList } from "react-icons/fa";
import { SiReactos } from "react-icons/si";
import { LuBox } from "react-icons/lu";
import { IoMail, IoOptionsOutline } from "react-icons/io5";
import { BiSolidFileExport } from "react-icons/bi";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MenuList = ({ darkTheme, collapsed }) => {
  const [openKeys, setOpenKeys] = useState([]);

  const handleMenuSelect = ({ key, keyPath }) => {
    // Close the dropdown unless a specific item is selected
    if (keyPath.length === 1) {
      setOpenKeys([]);
      console.log("Dropdown closed for key:", key);
    }
  };

  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className={`menu-bar text-secondary ${
        darkTheme ? "bg-black" : "bg-light"
      }`}
      onSelect={handleMenuSelect}
      openKeys={openKeys}
      onOpenChange={(keys) => setOpenKeys(keys)}
    >
      <div className={`form-field ${collapsed ? "full-width" : ""}`}>
        <input
          id="quick_search"
          className={`d-flex mb-2 ${collapsed ? "search-collapsed" : "search"}`}
          name="quick_search "
          placeholder="Search..."
          type="search"
          style={{
            width: collapsed ? "35%" : "90%",
            height: collapsed ? "30px" : "35px",
          }}
        />
        <i
          className={`fa fa-search text-secondary ${
            collapsed ? "search-icon-collapsed" : "search-icon"
          }`}
          aria-hidden="true"
        ></i>
        <div>
          <span
            className={`filter-icon text-black fs-5 ${
              collapsed ? "filter-icon-collapsed" : "filter-icon"
            }`}
          >
            <IoOptionsOutline />
          </span>
        </div>
      </div>
      <p
        className={`my-4 text-secondary ${
          collapsed ? "title-center" : "title-start"
        }`}
      >
        Menu
      </p>
      <Menu.Item key="saga" icon={<SiReactos />}>
        <Link to="/saga" className="text-decoration-none">
          Saga
        </Link>
        {/* Saga */}
      </Menu.Item>
      <Menu.Item key="dashboard" icon={<FaHouseUser />}>
        <Link to="/dashboard" className="text-decoration-none">
          Dashboard
        </Link>
        {/* Dashboard */}
      </Menu.Item>
      <Menu.Item key="calendar" icon={<FaCalendarDay />}>
        Calendar
        {/* <Link to="/calendar" className="text-decoration-none">Calendar</Link> */}
      </Menu.Item>
      <Menu.SubMenu key="documents" icon={<FaFolder />} title="Documents">
        <Menu.Item key="inbox" icon={<LuBox />}>
          Inbox
          {/* <Link to="/documents/inbox" className="text-decoration-none">Inbox</Link> */}
        </Menu.Item>
        <Menu.Item key="incoming" icon={<IoMail />}>
          {/* <Link to="/documents/incoming" className="text-decoration-none">Incoming</Link> */}
          Incoming
        </Menu.Item>
        <Menu.Item key="export" icon={<BiSolidFileExport />}>
          {/* <Link to="/documents/export" className="text-decoration-none">Export</Link> */}
          Export
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="statistics" icon={<AreaChartOutlined />}>
        {/* <Link to="/statistics" className="text-decoration-none">Statistics</Link> */}
        Statistics
      </Menu.Item>
      <Menu.Item key="chat" icon={<BsFillChatSquareTextFill />}>
        {/* <Link to="/chat" className="text-decoration-none">Chat</Link> */}
        Chat
      </Menu.Item>
      <p
        className={`mt-3 mb-4 text-secondary ${
          collapsed ? "title-center" : "title-start"
        }`}
      >
        Others
      </p>
      <Menu.Item key="info" icon={<BsFillInfoSquareFill />}>
        {/* <Link to="/info" className="text-decoration-none">Info</Link> */}
        Info
      </Menu.Item>
      <Menu.Item key="request" icon={<BsChatSquareDotsFill />}>
        {/* <Link to="/request" className="text-decoration-none">Request</Link> */}
        Request
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
