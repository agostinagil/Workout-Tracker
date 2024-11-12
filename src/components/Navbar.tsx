import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterModal from "./Modals/Register";
import { useAuthContext } from "../contexts/AuthContext";
import LoginModal from "./Modals/Login";

const navigation = [
  { name: "Dashboard", href: "/dashboard", private: true },
  { name: "Tracking", href: "/tracking", private: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const pathname = window.location.pathname.slice(1);
  const navigate = useNavigate();
  const { state, logout, isLoggedIn } = useAuthContext();

  const userLogged = state.users.filter((user) => user.isLoggedIn === true);

  const handleOpen = () => setOpenModal(true);
  const handleOpenLogin = () => setOpenLogin(true);

  const handleSignOut = () => {
    const user = state.users.find((user) => user.isLoggedIn === true);
    if (user) {
      logout(user.id);
      navigate("/");
    }
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-transparent border-b border-gray-200  fixed top-0 left-0 right-0 bg-transparencies-100 "
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 bg-third  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src={logo}
                  className="h-8 w-auto cursor-pointer"
                  onClick={() => handleLogo()}
                />
              </div>
              <div className="hidden mx-auto sm:block ">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href ? item.href : undefined}
                      aria-current={
                        item.name.toLocaleLowerCase() === pathname
                          ? "page"
                          : undefined
                      }
                      className={classNames(
                        item.name.toLocaleLowerCase() === pathname
                          ? "bg-third text-white hover:text-gray-100 rounded-md "
                          : "text-gray-600 hover:underline hover:underline-offset- hover:decoration-primary hover:underline-offset-8 hover:text-gray-700",
                        !isLoggedIn() && item.private ? "hidden" : "",
                        "px-3 py-2 text-base font-semibold hover:cursor-pointer"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                  {!isLoggedIn() && (
                    <a
                      className="text-gray-600 hover:underline hover:underline-offset- hover:decoration-primary hover:underline-offset-8 hover:text-gray-700 px-3 py-2 text-base font-semibold hover:cursor-pointer"
                      onClick={() => handleOpen()}
                    >
                      Create Account
                    </a>
                  )}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto ">
                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-second text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary hover:border-primary">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </MenuButton>
                  </div>
                  {userLogged.length > 0 ? (
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <MenuItem>
                        <a
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                        >
                          Your Profile
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                        >
                          Settings
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                          onClick={() => handleSignOut()}
                        >
                          Sign out
                        </a>
                      </MenuItem>
                    </MenuItems>
                  ) : (
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <MenuItem>
                        <a
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                          onClick={() => handleOpenLogin()}
                        >
                          Sign in
                        </a>
                      </MenuItem>
                    </MenuItems>
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href ? item.href : "undefined"}
                aria-current={
                  item.name.toLocaleLowerCase() === pathname
                    ? "page"
                    : undefined
                }
                className={classNames(
                  item.name.toLocaleLowerCase() === pathname
                    ? "bg-primary text-white"
                    : "text-third hover:bg-gray-300 hover:text-white",
                  !isLoggedIn() && item.private ? "hidden" : "",
                  "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                )}
              >
                {item.name}
              </a>
            ))}
            <a
              className={`${isLoggedIn() ? "hidden" : ""}
                    "text-third hover:bg-gray-300 cursor-pointer hover:text-white block rounded-md px-3 py-2 text-base font-medium"`}
              onClick={() => handleOpen()}
            >
              Create account
            </a>
          </div>
        </DisclosurePanel>
      </Disclosure>
      {openModal && <RegisterModal setIsOpen={setOpenModal} />}
      {openLogin && <LoginModal setIsOpenLogin={setOpenLogin} />}
    </>
  );
}
