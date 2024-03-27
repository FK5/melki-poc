import { LuLayoutDashboard } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { FaRegFileLines } from "react-icons/fa6";
import { TbBook2 } from "react-icons/tb";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { TbUserShield } from "react-icons/tb";

export const navItems = [
    { menuName: 'Dashboard', pathName: '/dashboard', menuIcon: <LuLayoutDashboard fontSize={27} /> },
    { menuName: 'Clients', pathName: '/dashboard/clients', menuIcon: <GrGroup fontSize={27} /> },
    { menuName: 'Registry', pathName: '/dashboard/registry', menuIcon: <FaRegFileLines fontSize={27} /> },
    { menuName: 'Matters', pathName: '/dashboard/matters', menuIcon: <TbBook2 fontSize={27} /> },
    { menuName: 'Tasks', pathName: '/dashboard/tasks', menuIcon: <MdOutlineTaskAlt fontSize={27} /> },
    { menuName: 'Hearings', pathName: '/dashboard/hearings', menuIcon: <FaBalanceScale fontSize={27} /> },
    { menuName: 'Calendar', pathName: '/dashboard/calendar', menuIcon: <FaRegCalendarAlt fontSize={27} /> },
    { menuName: 'Accounting', pathName: '/dashboard/accounting', menuIcon: <FaChartLine fontSize={27} /> },
    { menuName: 'Lawyers', pathName: '/dashboard/lawyers', menuIcon: <GrGroup fontSize={27} /> },
    { menuName: 'Log', pathName: '/dashboard/logs', menuIcon: <FaRegFileLines fontSize={27} /> },
    { menuName: 'Admin', pathName: '/dashboard/admin', menuIcon: <TbUserShield fontSize={27} /> },
];

export default {
    navItems,
}