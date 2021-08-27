import { FcHome, FcInspection, FcCalendar, FcSettings } from "react-icons/fc";

export const HamburguerData = [
  {
    title: "Dashboard",
    icon: <FcHome />,
    path: "/home",
  },
  {
    title: "Add Task",
    icon: <FcInspection />,
    path: "/addTask",
  },
  {
    title: "Calendar",
    icon: <FcCalendar />,
    path: "/calendar",
  },
  {
    title: "Settings",
    icon: <FcSettings />,
    path: "/settings",
  },
];
