import styles from "./Dashboard.module.css";
import {
  FiFolder,
  FiBriefcase,
  FiFileText,
  FiDollarSign,
} from "react-icons/fi";

const stats = [
  {
    title: "Active Projects",
    value: "04",
    change: "Projects currently running",
    icon: <FiFolder />,
  },
  {
    title: "Jobs Today",
    value: "02",
    change: "Scheduled for today",
    icon: <FiBriefcase />,
  },
  {
    title: "Pending Invoices",
    value: "01",
    change: "Awaiting payment",
    icon: <FiFileText />,
  },
  {
    title: "MTD Spend",
    value: "₹3.2 L",
    change: "Month-to-date expenditure",
    icon: <FiDollarSign />,
  },
];

const activeJobs = [
  {
    project: "Commercial Complex",
    supplier: "Build Infra",
    equipment: "Transit Mixer 8m³",
    status: "Running",
  },
  {
    project: "Residential Project",
    supplier: "BuildTech",
    equipment: "Excavator",
    status: "Scheduled",
  },
];

const activities = [
  {
    title: "Requirement Submitted",
    description: "2 Transit Mixers requested for Tower A",
    time: "10 mins ago",
  },
  {
    title: "Quotation Approved",
    description: "ABC Infra quotation approved",
    time: "2 hours ago",
  },
  {
    title: "Job Started",
    description: "Transit Mixer assigned to Tower A",
    time: "Yesterday",
  },
  {
    title: "Invoice Generated",
    description: "Invoice INV-102 generated",
    time: "2 days ago",
  },
];

function Dashboard() {
  return (
    <>
      <div className={styles.dashboard}>
        <section className={styles.welcomeSection}>
          <h1>Good Morning, Abhi</h1>
          <p>
            Welcome back to ABC Builders. Here's an overview
            of your construction activities.
          </p>
        </section>

        <section className={styles.statsGrid}>
          {stats.map((item) => (
            <div key={item.title} className={styles.statCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
              </div>

              <h2>{item.value}</h2>
              <p>{item.change}</p>
            </div>
          ))}
        </section>
      </div>

      <section className={styles.jobsSection}>
        <div className={styles.sectionHeader}>
          <h2>Active Jobs</h2>
          <p>Currently assigned and running jobs</p>
        </div>

        <table className={styles.jobsTable}>
          <thead>
            <tr>
              <th>Project</th>
              <th>Supplier</th>
              <th>Equipment</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {activeJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.project}</td>
                <td>{job.supplier}</td>
                <td>{job.equipment}</td>
                <td>
                  <span
                    className={`${styles.status} ${job.status === "Running"
                        ? styles.running
                        : styles.scheduled
                      }`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.activitySection}>
        <div className={styles.sectionHeader}>
          <h2>Recent Activity</h2>
          <p>Latest updates across your account</p>
        </div>

        <table className={styles.activityTable}>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Description</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.actionsSection}>
        <div className={styles.sectionHeader}>
          <h2>Quick Actions</h2>
          <p>Frequently used actions</p>
        </div>

        <div className={styles.actionsGrid}>
          <button className={styles.actionCard}>
            New Requirement
          </button>
          <button className={styles.actionCard}>
            View Quotations
          </button>
          <button className={styles.actionCard}>
            Download Invoices
          </button>
          <button className={styles.actionCard}>
            Generate Report
          </button>
        </div>
      </section>
    </>
  );
}

export default Dashboard;