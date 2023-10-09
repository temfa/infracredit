import React from "react";
import DashboardIcon from "@/component/Svgs/dashboard";
import Deletedsvg from "@/component/Svgs/deletedsvg";
import Draftssvg from "@/component/Svgs/draftssvg";
import Taskssvg from "@/component/Svgs/taskssvg";
import AdminSvg from "@/component/Svgs/admin";

const SidenavData = ({ color, color2, color3, color4, color5 }: { color: any; color2: any; color3: any; color4: any; color5: any }) => {
  const user: string = "Admin";

  return [
    {
      svg: <DashboardIcon color={color} />,
      title: "Dashboard",
      link: "/admin/Dashboard",
    },
    {
      svg: <Draftssvg color={color2} />,
      title: "Drafts",
      link: "/admin/Draft",
    },
    {
      svg: <Deletedsvg color={color3} />,
      title: "Deleted",
      link: "/admin/Deleted",
    },
    {
      svg: <Taskssvg color={color4} />,
      title: "Tasks",
      link: "/admin/Tasks",
    },
    user === "Admin"
      ? {
          svg: <AdminSvg color={color5} />,
          title: "Admin",
          link: "/admin",
        }
      : null,
  ];
};

export default SidenavData;
