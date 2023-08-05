import { FaUserFriends, FaTicketAlt } from "react-icons/fa";
import { MdSupportAgent, MdCategory } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";
import { RiDashboardFill, RiTeamFill } from "react-icons/ri";
import {FaUsers} from 'react-icons/fa'

export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboardFill />,
    role: ["admin", "coach", "seller", "buyer"],
  },
  {
    name: "Users",
    icon: <FaUserFriends />,
    role: ["admin"],
    path: "#",
    children: [
      { name: "Buyers", path: "buyerlist" },
      { name: "Sellers", path: "sellerlist" },
      { name: "Coach", path: "coachlist" },
    ],
  },
  {
    name: "Users",
    icon: <FaUserFriends />,
    role: ["coach"],
    path: "#",
    children: [
      { name: "Buyers", path: "buyerlist" },
      { name: "Sellers", path: "sellerlist" },
    ],
  },
  {
    name: "Raffle",
    path: "/raffle",
    icon: <FaTicketAlt />,
    role: ["admin","coach","seller", "buyer"],
  },
  {
    name: "My Raffle",
    path: "/myraffle",
    icon: <HiOutlineTicket />,
    role: ["coach","buyer"],
  },
  {
    name: "Team",
    icon: <RiTeamFill />,
    role: ["coach"],
    path: "#",
    children: [
      { name: "Teams", path: "teams" },
      { name: "Team Roster", path: "teamroster" },
  ],
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <TbReportSearch />,
    role: ["admin"],
  },
  {
    name: "Revenue",
    path: "/revenue",
    icon: <GiReceiveMoney />,
    role: ["seller"],
  },
  {
    name: "User List",
    path: "/user-list",
    icon: <FaUsers />,
    role: ["seller"],
  },
  {
    name: "Contact Support",
    path: "/contact-support",
    icon: <MdSupportAgent />,
    role: ["admin", "coach", "seller", "buyer"],
  },
  {
    name: "Category",
    path: "/category",
    icon: <MdCategory />,
    role: ["admin"],
  },
];
