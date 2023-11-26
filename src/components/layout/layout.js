import React, { useState } from "react";
import Sidebar from "./sidebar";

const Layout = ({ children, selected }) => {
  const [Collapse, setCollapsed] = useState(false);
  return (
    <div className="flex py-6">
      <Sidebar collapsed={Collapse} setCollapsed={(e) => setCollapsed(e)} selected={selected} />
      <div className="px-6 pb-6">{children}</div>
    </div>
  );
};

export default Layout;
