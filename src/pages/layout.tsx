import { SidebarV2 } from "@/components/ui/sidebar";
import { useSidebarToogle } from "@/lib/recoil-store/hooks";
import {
  AiOutlineAppstore,
  AiOutlineForm,
  AiOutlineHdd,
  AiOutlineHistory,
} from "react-icons/ai";
import { Outlet } from "react-router";
export const Layout = () => {
  const { getToogle } = useSidebarToogle();
  const onLogout = () => {
    console.log("logout");
  };
  const listSidebar = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <AiOutlineAppstore />,
    },
    {
      name: "Products",
      link: "/dashboard/category",
      icon: <AiOutlineHdd />,
    },
    {
      name: "Order",
      link: "/dashboard/order",
      icon: <AiOutlineForm />,
    },
    {
      name: "Order History",
      link: "/dashboard/order-history",
      icon: <AiOutlineHistory />,
    },
  ];
  return (
    <div className="layout min-h-[100vh] flex">
      <SidebarV2
        showSideBar={getToogle as boolean}
        sideList={listSidebar}
        onLogout={onLogout}
        title="WargaApps"
      />
      <main className="content flex-1 overflow-y-auto p-7">
        <Outlet />
      </main>
    </div>
  );
};
