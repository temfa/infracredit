import DashboardIcon from "@/component/Svgs/dashboard";
import Deletedsvg from "@/component/Svgs/deletedsvg";
import Draftssvg from "@/component/Svgs/draftssvg";
import Taskssvg from "@/component/Svgs/taskssvg";

export const sidenav = [
  {
    svg: <DashboardIcon />,
    title: "Dashboard",
  },
  {
    svg: <Draftssvg />,
    title: "Drafts",
  },
  {
    svg: <Deletedsvg />,
    title: "Delete",
  },
  {
    svg: <Taskssvg />,
    title: "Tasks",
  },
];
