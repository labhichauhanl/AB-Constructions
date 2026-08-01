import styles from "./Jobs.module.css";
import { useState } from "react";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [equipmentFilter, setEquipmentFilter] = useState("All");
  const [supplierFilter, setSupplierFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {

    const matchesSearch =
        job.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.equipment.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;

    const matchesEquipment =
        equipmentFilter === "All" || job.equipment === equipmentFilter;

    const matchesSupplier =
        supplierFilter === "All" || job.supplier === supplierFilter;

    return (
        matchesSearch &&
        matchesStatus &&
        matchesEquipment &&
        matchesSupplier
    );
});

  return (
    <div className={styles.jobsPage}>
      <div className={styles.pageHeader}>
        
        <div>
          <span className={styles.pageTag}>Jobs Overview</span>
          <h1>Jobs</h1>
          <p>
            Manage active and scheduled jobs.
          </p>
        </div>

        <button className={styles.addButton}>
          + New Job
        </button>
      </div>

      <div className={styles.filtersWrapper}>

    <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Search Jobs</label>
        <input
            type="text"
            placeholder="Project, Supplier or Equipment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
        />
    </div>

    <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Status</label>
        <select
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
        >
            <option>All</option>
            <option>Running</option>
            <option>Scheduled</option>
            <option>Completed</option>
        </select>
    </div>

    <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Equipment</label>
        <select
            className={styles.filterSelect}
            value={equipmentFilter}
            onChange={(e) => setEquipmentFilter(e.target.value)}
        >
            <option>All</option>
            <option>Transit Mixer</option>
            <option>Excavator</option>
            <option>Concrete Supply</option>
        </select>
    </div>

    <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Supplier</label>
        <select
            className={styles.filterSelect}
            value={supplierFilter}
            onChange={(e) => setSupplierFilter(e.target.value)}
        >
            <option>All</option>
            <option>ABC Infra</option>
            <option>BuildTech</option>
            <option>UltraMix</option>
        </select>
    </div>

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
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.project}</td>
                <td>{job.supplier}</td>
                <td>{job.equipment}</td>

                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[
                      job.status
                        .replace(/\s+/g, "")
                        .toLowerCase()]}`}>
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