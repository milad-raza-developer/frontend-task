import React, { useState } from "react";
import Sidebar from "./sidebar";
import { menu_icon } from "../../assets/icons/icons";

const Layout = ({ children, selected }) => {
  const [Collapse, setCollapsed] = useState(false);
  return (
    <div className="flex py-6">
      <div className="md:flex hidden">
        <Sidebar
          collapsed={Collapse}
          setCollapsed={(e) => setCollapsed(e)}
          selected={selected}
        />
      </div>
      <div
        className={`${
          !Collapse ? "md:pl-56 pl-2" : "md:pl-[6.5rem] pl-2"
        } md:pr-6 pr-2  w-full`}
      >
        <img
          src={menu_icon}
          alt="menu"
          className="cursor-pointer mb-4 mt-2 ml-2 w-6 md:hidden flex"
          // onClick={() => setCollapsed(!collapsed)}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
