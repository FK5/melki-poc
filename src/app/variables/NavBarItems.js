import { PiSquaresFour } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { PiFolder } from "react-icons/pi";
import { PiBooks } from "react-icons/pi";
import { PiCheckSquare } from "react-icons/pi";
import { PiScales } from "react-icons/pi";
import { PiCalendar } from "react-icons/pi";
import { PiChartLineUp } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { PiFileText } from "react-icons/pi";
import { PiFingerprint } from "react-icons/pi";

export const navItems = [
    { menuName: 'Dashboard', pathName: '/dashboard', menuIcon: <PiSquaresFour fontSize={20} /> },
    { menuName: 'Clients', pathName: '/dashboard/clients', menuIcon: <PiUsersThree fontSize={20} /> },
    { menuName: 'Registry', pathName: '/dashboard/registry', menuIcon: <PiFolder fontSize={20} /> },
    { menuName: 'Matters', pathName: '/dashboard/matters', menuIcon: <PiBooks fontSize={20} /> },
    { menuName: 'Tasks', pathName: '/dashboard/tasks', menuIcon: <PiCheckSquare fontSize={20} /> },
    { menuName: 'Hearings', pathName: '/dashboard/hearings', menuIcon: <PiScales fontSize={20} /> },
    { menuName: 'Calendar', pathName: '/dashboard/calendar', menuIcon: <PiCalendar fontSize={20} /> },
    { menuName: 'Accounting', pathName: '/dashboard/accounting', menuIcon: <PiChartLineUp fontSize={20} /> },
    { menuName: 'Lawyers', pathName: '/dashboard/lawyers', menuIcon: <PiUsers fontSize={20} /> },
    { menuName: 'Log', pathName: '/dashboard/logs', menuIcon: <PiFileText fontSize={20} /> },
    { menuName: 'Admin', pathName: '/dashboard/admin', menuIcon: <PiFingerprint fontSize={20} /> },
];

export default {
    navItems,
}