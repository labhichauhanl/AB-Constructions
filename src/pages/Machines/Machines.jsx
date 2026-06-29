import styles from "./Machines.module.css";

const machines = [
  {
    id: 1,
    category: "Excavator",
    uniqueId: "EX-102",
    rto: "UP20AB1234",
    model: "JCB 220X",
    buyDate: "12 Jan 2024",
    capacity: "1.2m³",
    ownership: "Owned",
    compliance: "Fit",
  },
  {
    id: 2,
    category: "Transit Mixer",
    uniqueId: "TM-201",
    rto: "UP20CD5678",
    model: "Schwing Stetter",
    buyDate: "20 Mar 2023",
    capacity: "8m³",
    ownership: "Rented",
    compliance: "Fit",
  },
  {
    id: 3,
    category: "Crane",
    uniqueId: "CR-305",
    rto: "UP20EF9012",
    model: "ACE 14XW",
    buyDate: "05 Jul 2022",
    capacity: "14 Ton",
    ownership: "Owned",
    compliance: "Maintenance Due",
  },
];

function Machines() {
  return (
    <div className={styles.machinesPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Machines</h1>
          <p>
            Manage all company machines and assets
          </p>
        </div>

        <button className={styles.addButton}>
          + Add Machine
        </button>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search machines..."
          className={styles.searchInput}
        />
      </div>

      <section className={styles.tableSection}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Unique ID</th>
              <th>RTO Number</th>
              <th>Model</th>
              <th>Buy Date</th>
              <th>Capacity</th>
              <th>Ownership</th>
              <th>Compliance</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {machines.map((machine) => (
              <tr key={machine.id}>
                <td>{machine.category}</td>
                <td>{machine.uniqueId}</td>
                <td>{machine.rto}</td>
                <td>{machine.model}</td>
                <td>{machine.buyDate}</td>
                <td>{machine.capacity}</td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[machine.ownership.toLowerCase()]}`}
                  >
                    {machine.ownership}
                  </span>
                </td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${machine.compliance === "Fit"
                        ? styles.fit
                        : styles.maintenance
                      }`}
                  >
                    {machine.compliance}
                  </span>
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.editButton}>
                      Edit
                    </button>
                    <button className={styles.deleteButton}>
                      Delete
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

export default Machines;