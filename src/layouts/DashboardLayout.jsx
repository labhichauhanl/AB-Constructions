import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

import styles from "./DashboardLayout.module.css";

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar collapsed={collapsed} />

      <div className={styles.mainSection}>
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;