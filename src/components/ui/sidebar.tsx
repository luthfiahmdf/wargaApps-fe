import React, { FC, Fragment, ReactElement } from "react";

import { Button } from "./button";
import { IoMdMenu } from "react-icons/io";
import { TSidebarV2 } from "@/types/sidebar/type";
import { useSidebarToogle } from "@/lib/recoil-store/hooks";
import { NavLink, useLocation } from "react-router";
import { AiOutlineLogout } from "react-icons/ai";

export const SidebarV2: FC<TSidebarV2> = ({
  title = "Nama Modul",
  sideList,
  onLogout,
  showSideBar,
}): ReactElement => {
  const path = useLocation();
  const { getToogle, setToogle } = useSidebarToogle();
  const toggleSidebar = () => {
    setToogle(!getToogle);
  };

  return (
    <Fragment>
      {/* Desktop */}
      <aside
        className={`lg:flex flex-col xl:gap-3 lg:gap-2 items-center min-h-[100vh] justify-between h-screen   hidden shadow-xl ${
          showSideBar
            ? "2xl:w-[14%] xl:w-[22%] lg:w-[30%] md:w-[30%]"
            : "lg:w-[12%] 2xl:w-[6%]"
        } border-r border-slate-3 transition-all px-4 py-1 duration-500 ease-in-out overflow-y-hidden`}
        // onMouseEnter={onHoverOn}
        // onMouseLeave={onHoverOff}
      >
        {/* Header section */}
        <header
          className={`w-full flex duration-500 ease-in-out  ${
            showSideBar ? "items-start" : "items-center"
          } flex-col gap-9 pt-3`}
        >
          <div className="flex justify-center items-center">
            <figure className="flex items-center justify-center">
              <img src="/logoKarta.webp" alt="logo" width={70} height={70} />
            </figure>

            <h1
              className={`xl:text-lg text-base font-bold ease-in-out absolute  xl:left-[5em] lg:left-[5em] ${
                showSideBar ? "delay-100 duration-500" : "opacity-0 duration-0"
              }`}
            >
              {title}
            </h1>
          </div>
          <Button
            className={`absolute bg-white  transition-all  duration-500 ease-in-out z-50 ${
              showSideBar
                ? "xl:left-[15em] xl:top-[4em] lg:left-[13em] lg:top-[4em] 2xl:left-[16em]"
                : "xl:left-[8em] xl:top-[4em] lg:left-[5em] lg:top-[4em] 2xl:left-[5em]"
            }`}
            onClick={toggleSidebar}
          >
            <IoMdMenu className="text-2xl text-primary" />
          </Button>
          {/* Sidebar list */}
          <section className="w-full flex flex-col xl:gap-2 gap-0.5 items-center ease-in mb-4">
            {sideList.map((item, index) => (
              <NavLink
                key={index}
                to={`${item.link}`}
                className={`${
                  showSideBar
                    ? "w-full"
                    : "xl:w-[70%] lg:w-[85%] justify-center"
                } flex items-center text-center p-2.5 rounded-md duration-300 ease-in-out  ${
                  item.link === path.pathname
                    ? "bg-primary"
                    : "hover:bg-primary/20 text-white group active:bg-primary-green focus:bg-primary-green"
                }`}
              >
                <span
                  className={`${
                    item.link === path.pathname
                      ? "text-white"
                      : "text-primary group-active:text-primary-white group-focus:text-primary-white"
                  }  xl:text-2xl lg:text-base`}
                >
                  {item.icon}
                </span>
                <span
                  className={`${showSideBar ? "delay-150" : "opacity-0"} ${
                    item.link === path.pathname
                      ? "text-white"
                      : "text-primary group-active:text-primary-white group-focus:text-primary-white"
                  }  absolute xl:left-[5em] lg:left-[4em] xl:text-base lg:text-sm`}
                >
                  {item.name}
                </span>
              </NavLink>
            ))}
          </section>
        </header>
        {/* Footer section */}
        <section className="w-full flex flex-col xl:gap-2 gap-1 items-center ease-in xl:mt-[3rem] lg:mt-[2rem] mb-8">
          <hr className="w-full" />
          <button
            onClick={onLogout}
            className={`${
              showSideBar ? "w-full" : "xl:w-[70%] lg:w-[85%] justify-center"
            } flex items-center text-center p-2.5 rounded-md hover:bg-secondary-green-0.5 group active:bg-primary-green focus:bg-primary-green duration-300 ease-in-out`}
          >
            <span className="text-2xl text-primary group-active:text-primary-white group-focus:text-primary-white xl:text-2xl lg:text-base">
              <AiOutlineLogout />
            </span>
            <span
              className={`${
                showSideBar ? "delay-150" : "opacity-0"
              } text-primary group-active:text-primary-white group-focus:text-primary-white absolute xl:left-[5em] left-[4em] xl:text-base lg:text-sm`}
            >
              Keluar
            </span>
          </button>
        </section>
      </aside>

      {/* Mobile */}
      <Button
        className={`absolute bg-white lg:hidden transition-all  duration-500 ease-in-out z-[999999999] top-6 right-8 shadow-md  p-2`}
        onClick={toggleSidebar}
      >
        <IoMdMenu className="text-2xl text-primary" />
      </Button>
      <aside
        className={`fixed flex flex-col lg:hidden h-full md:w-[30%] sm:w-[45%] w-[60%] bg-white shadow-md border-r border-slate-3 
        transition-all px-4 py-2 gap-5 z-50 ${
          getToogle ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex w-full items-center gap-6">
          <figure>
            <img
              src={"/logoKarta.webp"}
              alt="nusaverse"
              width={100}
              height={100}
              className="sm:w-[4em] sm:h-[4em] w-[3em] h-[3em] "
            />
          </figure>
          <h1 className={`sm:text-lg text-base font-bold ease-in-out`}>
            {title}
          </h1>
        </header>

        <section className="w-full flex flex-col gap-2 items-center ease-in">
          {sideList.map((item, index) => (
            <NavLink
              key={index}
              to={`${item.link}`}
              className={`w-full flex items-center gap-4 text-center p-2.5 rounded-md duration-300 ease-in-out  ${
                item.link === path.pathname
                  ? "bg-primary"
                  : "hover:bg-secondary-green-0.5 group active:bg-primary-green focus:bg-primary-green"
              }`}
            >
              <span
                className={`${
                  item.link === path.pathname
                    ? "text-white"
                    : "text-primary group-active:text-white group-focus:text-white"
                }  text-xl`}
              >
                {item.icon}
              </span>
              <span
                className={`${
                  item.link === path.pathname
                    ? "text-white"
                    : "text-primary group-active:text-primary-white group-focus:text-primary-white"
                } sm:text-base text-sm`}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </section>

        {/* Footer section */}
        <section className="w-full flex flex-col gap-2 items-center ease-in xl:mt-[3rem] lg:mt-[2rem]">
          <hr className="w-full" />
          <button
            onClick={onLogout}
            className={`w-full flex items-center text-center p-2.5 gap-4 rounded-md hover:bg-secondary-green-0.5 group active:bg-primary-green focus:bg-primary-green duration-300 ease-in-out`}
          >
            <AiOutlineLogout className="text-xl text-primary-green group-active:text-primary-white group-focus:text-primary-white" />

            <span
              className={`text-primary-green group-active:text-primary-white group-focus:text-primary-white sm:text-base text-sm`}
            >
              Keluar
            </span>
          </button>
        </section>
      </aside>
    </Fragment>
  );
};
