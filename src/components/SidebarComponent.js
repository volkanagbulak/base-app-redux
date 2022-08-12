import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleChange } from "../redux/global";

import { MenuIcon } from "@heroicons/react/outline";

const SidebarComponent = () => {
  const dispatch = useDispatch();
  const { sidebarToggle } = useSelector((state) => state.global);

  const SetShowSidebar = async (value) => {
    await toggleChange(dispatch, { value });
  };

  return (
    <div className={`text-gray-900 bg-white border-r border-gray-100 left-sidebar  ${sidebarToggle ? "left-sidebar-open" : "left-sidebar-close"}`}>
      <div className="logo truncate">
        <a className="flex flex-row items-center justify-start space-x-2" href="/">
          <span>Board Template</span>
        </a>
        <button className="block ml-auto mr-4 md:hidden">
          <MenuIcon className="h-5 cursor-pointer" onClick={() => SetShowSidebar(!sidebarToggle)} />
        </button>
      </div>
      <div className="left-sidebar-title">
        <span>Task Yönetimi</span>
      </div>
      <ul>
        <li className="l0">
          <Link to="/" className="left-sidebar-item">
            <span className="title pl-5">Dashboard</span>
          </Link>
          <Link to="/task-ekleme" className="left-sidebar-item">
            <span className="title pl-5">Task Ekleme</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarComponent;
