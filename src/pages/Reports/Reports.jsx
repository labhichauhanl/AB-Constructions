import styles from "./Reports.module.css";

const reportCards = [
  {
    title: "Total Projects",
    value: "12",
    subtitle: "Across all locations",
  },
  {
    title: "Active Jobs",
    value: "7",
    subtitle: "Currently running",
  },
  {
    title: "Monthly Spend",
    value: "₹8.5L",
    subtitle: "Current month",
  },
  {
    title: "Pending Invoices",
    value: "3",
    subtitle: "Awaiting payment",
  },
];

const reports = [
  {
    name: "Monthly Spending Report",
    type: "Financial",
    date: "June 2026",
  },
  {
    name: "Project Performance Report",
    type: "Projects",
    date: "June 2026",
  },
  {
    name: "Equipment Utilization Report",
    type: "Operations",
    date: "June 2026",
  },
  {
    name: "Vendor Activity Report",
    type: "Suppliers",
    date: "June 2026",
  },
];

function Reports() {
  return (
    <div className={styles.reportsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Reports</h1>
          <p>Project analytics and financial overview.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <section className={styles.statsGrid}>
        {reportCards.map((card) => (
          <div
            key={card.title}
            className={styles.statCard}
          >
            <h3>{card.title}</h3>
            <h2>{card.value}</h2>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </section>

      {/* Reports List */}
      <section className={styles.reportSection}>
        <div className={styles.sectionHeader}>
          <h2>Available Reports</h2>
          <p>Download and review generated reports.</p>
        </div>

        <table className={styles.reportTable}>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Category</th>
              <th>Period</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.name}</td>
                <td>{report.type}</td>
                <td>{report.date}</td>

                <td>
                  <button
                    className={styles.downloadBtn}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Quick Actions */}
      <section className={styles.actionsSection}>
        <div className={styles.sectionHeader}>
          <h2>Quick Actions</h2>
          <p>Generate and export reports.</p>
        </div>

        <div className={styles.actionsGrid}>
          <button className={styles.actionCard}>
            Generate Report
          </button>

          <button className={styles.actionCard}>
            Export PDF
          </button>

          <button className={styles.actionCard}>
            Email Summary
          </button>
        </div>
      </section>
    </div>
  );
}

export default Reports;