// Sidebar.js
import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { menu_icon } from "../../assets/icons/icons";

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed, selected }) => {
  const navigate = useNavigate();

  const onHandleRoute = (key) => {
    key == 1 && navigate("/");
    key == 2 && navigate("/user-table");
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="bg-white rounded-tr-md rounded-br-md h-[92vh]"
    >
        <div className="w-full px-4">
    <img src={menu_icon} alt="menu" className="cursor-pointer" onClick={() => setCollapsed(!collapsed)} />
    </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={[selected]}
        className="bg-white mt-4"
      >
        <Menu.Item
          key="1"
          icon={
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${selected == 1 ? "fill-white" : "fill-Gray"}`}
            >
              <path d="M14.2222 0.5H1.77778C0.8 0.5 0 1.3 0 2.27778V14.7222C0 15.7 0.8 16.5 1.77778 16.5H14.2222C15.2 16.5 16 15.7 16 14.7222V2.27778C16 1.3 15.2 0.5 14.2222 0.5ZM3.55556 4.05556H5.33333V5.83333H3.55556V4.05556ZM3.55556 7.61111H5.33333V9.38889H3.55556V7.61111ZM3.55556 11.1667H5.33333V12.9444H3.55556V11.1667ZM12.4444 12.9444H7.11111V11.1667H12.4444V12.9444ZM12.4444 9.38889H7.11111V7.61111H12.4444V9.38889ZM12.4444 5.83333H7.11111V4.05556H12.4444V5.83333Z" />
            </svg>
          }
          onClick={() => onHandleRoute("1")}
        >
          User Form
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${selected == 2 ? "fill-white" : "fill-Gray"}`}
            >
              <path d="M0 2.1C0 1.67565 0.168571 1.26869 0.468629 0.968629C0.768687 0.668571 1.17565 0.5 1.6 0.5L4.26667 0.5V4.76667H0V2.1ZM0 5.83333V14.9C0 15.3243 0.168571 15.7313 0.468629 16.0314C0.768687 16.3314 1.17565 16.5 1.6 16.5H4.26667V5.83333H0ZM5.33333 16.5H14.4C14.8243 16.5 15.2313 16.3314 15.5314 16.0314C15.8314 15.7313 16 15.3243 16 14.9V5.83333H5.33333V16.5ZM16 4.76667V2.1C16 1.67565 15.8314 1.26869 15.5314 0.968629C15.2313 0.668571 14.8243 0.5 14.4 0.5L5.33333 0.5V4.76667H16Z" />
            </svg>
          }
          onClick={() => onHandleRoute("2")}
        >
          User Table
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
