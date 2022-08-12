import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MenuIcon } from "@heroicons/react/outline";
import { logout } from "../redux/auth/auth";
import { toggleChange } from "../redux/global";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { sidebarToggle } = useSelector((state) => state.global);

  const handleLogout = async () => {
    await logout(dispatch);
  };

  const SetShowSidebar = async (value) => {
    await toggleChange(dispatch, { value });
  };

  return (
    <div className="bg-white text-gray-900 border-b border-gray-100">
      <div className="flex items-center justify-start w-full py-2 px-5  h-16">
        <MenuIcon className="h-5 cursor-pointer  md:hidden" onClick={() => SetShowSidebar(!sidebarToggle)} />
        <span className="ml-auto"></span>
        <div className="relative inline-block text-left">
          <Menu as="div" className="ml-3 relative">
            <Menu.Button className="max-w-xs">
              <div className="flex items-center space-x-4 ">
                <img className="w-10 h-10 rounded-md" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                <div className="font-bold text-gray-500 text-left">
                  <div>
                    {user?.firstName} {user?.lastName}
                  </div>
                  <div className="text-sm text-gray-500">Joined in August 2014</div>
                </div>
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Profil
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700">
                    Çıkış Yap
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
