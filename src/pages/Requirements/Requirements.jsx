import styles from "./Requirements.module.css";

const requirements = [
  {
    id: 1,
    requirement: "2 Transit Mixers",
    project: "Commercial Complex",
    date: "22 Jun 2026",
    status: "Pending",
  },
  {
    id: 2,
    requirement: "1 Excavator",
    project: "Highway Expansion",
    date: "15 Jun 2026",
    status: "Approved",
  },
  {
    id: 3,
    requirement: "20 Workers",
    project: "Luxury Villa Construction",
    date: "05 Jun 2026",
    status: "In Progress",
  },
];

function Requirements() {
  return (
    <div className={styles.requirementsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Requirements</h1>
          <p>
            Manage equipment and workforce requests.
          </p>
        </div>

        <button className={styles.addButton}>
          + New Requirement
        </button>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search requirements..."
          className={styles.searchInput}
        />
      </div>

      <section className={styles.tableSection}>
        <table className={styles.requirementsTable}>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Project</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {requirements.map((item) => (
              <tr key={item.id}>
                <td>{item.requirement}</td>
                <td>{item.project}</td>
                <td>{item.date}</td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[
                      item.status
                        .replace(/\s+/g, "")
                        .toLowerCase()
                      ]
                      }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className={styles.editButton}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Requirements;