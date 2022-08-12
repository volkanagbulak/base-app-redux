import React from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../components/HeaderComponent";
import PageTitleComponent from "../components/PageTitleComponent";
import SidebarComponent from "../components/SidebarComponent";

const LayoutComponent = ({ children, pageTitle }) => {
  const { sidebarToggle } = useSelector((state) => state.global);

  return (
    <div className="wrapper">
      <SidebarComponent sidebarState={sidebarToggle} />
      <div className="main w-full bg-gray-50 text-gray-900">
        <HeaderComponent sidebarState={sidebarToggle} />
        <div className="w-full min-h-screen p-4">
          <PageTitleComponent pageTitle={pageTitle} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
