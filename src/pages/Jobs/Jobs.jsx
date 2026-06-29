import styles from "./Jobs.module.css";

const jobs = [
  {
    id: 1,
    project: "Commercial Complex",
    supplier: "ABC Infra",
    equipment: "Transit Mixer",
    status: "Running",
  },
  {
    id: 2,
    project: "Luxury Villa Construction",
    supplier: "BuildTech",
    equipment: "Excavator",
    status: "Scheduled",
  },
  {
    id: 3,
    project: "Highway Expansion",
    supplier: "UltraMix",
    equipment: "Concrete Supply",
    status: "Completed",
  },
];

function Jobs() {
  return (
    <div className={styles.jobsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Jobs</h1>
          <p>
            Manage active and scheduled jobs.
          </p>
        </div>

        <button className={styles.addButton}>
          + New Job
        </button>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search jobs..."
          className={styles.searchInput}
        />
      </div>

      <section className={styles.tableSection}>
        <table className={styles.jobsTable}>
          <thead>
            <tr>
              <th>Project</th>
              <th>Supplier</th>
              <th>Equipment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.project}</td>
                <td>{job.supplier}</td>
                <td>{job.equipment}</td>

                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[
                      job.status
                        .replace(/\s+/g, "")
                        .toLowerCase()
                      ]
                      }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.viewButton}>
                      View
                    </button>

                    <button className={styles.editButton}>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Jobs;