import { NavLink } from "react-router-dom";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Sidebar.module.css";

function Sidebar({ collapsed }) {
  const [machinesOpen, setMachinesOpen] = useState(false);

  const menuItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: <FolderIcon />,
    },
    {
      path: "/requirements",
      label: "Requirements",
      icon: <AssignmentIcon />,
    },
    {
      path: "/quotations",
      label: "Quotations",
      icon: <RequestQuoteIcon />,
    },
    {
      path: "/jobs",
      label: "Jobs",
      icon: <EngineeringIcon />,
    },
    {
      path: "/invoices",
      label: "Invoices",
      icon: <ReceiptLongIcon />,
    },
    {
      path: "/reports",
      label: "Reports",
      icon: <BarChartIcon />,
    },
    {
      path: "/users",
      label: "Company & Users",
      icon: <GroupsIcon />,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${
        collapsed ? styles.collapsed : ""
      }`}
    >
      <div className={styles.logo}>
        <div className={styles.logoIcon}>AB</div>
        {!collapsed && <h2>ABC Builders</h2>}
      </div>

      <nav>
        {menuItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            <span>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}

        <div
          className={styles.parentLink}
          onClick={() => setMachinesOpen(!machinesOpen)}
        >
          <div className={styles.parentLeft}>
            <EngineeringIcon />
            {!collapsed && <span>Machines</span>}
          </div>

          {!collapsed && (
            <ExpandMoreIcon
              className={`${styles.dropdownArrow} ${
                machinesOpen ? styles.rotate : ""
              }`}
            />
          )}
        </div>

        {machinesOpen && !collapsed && (
          <div className={styles.subMenu}>
            <NavLink
              to="/machines"
              className={styles.subLink}
            >
              All Machines
            </NavLink>

            <NavLink
              to="/machine-availability"
              className={styles.subLink}
            >
              Availability
            </NavLink>

            <NavLink
              to="/machine-utilisation"
              className={styles.subLink}
            >
              Utilisation
            </NavLink>
          </div>
        )}

        {menuItems.slice(5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            <span>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;