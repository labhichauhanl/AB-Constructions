import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    name: "Luxury Villa Construction",
    type: "Residential Project",
    status: "In Progress",
    progress: 80,
  },
  {
    id: 2,
    name: "Commercial Complex",
    type: "Commercial Project",
    status: "Planning",
    progress: 0,
  },
  {
    id: 3,
    name: "Highway Expansion",
    type: "Infrastructure Project",
    status: "Completed",
    progress: 100,
  }
]

function Projects() {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.pageHeader}>
        <div className={styles.welcomeSection}>
          <h1>Projects</h1>
          <p>Manage all ongoing construction projects.</p>
        </div>

        <button className={styles.addButton}>
          + New Project
        </button>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search projects..."
          className={styles.searchInput}
        />
      </div>

      <section className={styles.tableSection}>
  <table className={styles.projectsTable}>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Type</th>
        <th>Status</th>
        <th>Progress</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {projects.map((project) => (
        <tr key={project.id}>
          <td>{project.name}</td>
          <td>{project.type}</td>

          <td>
            <span
              className={`${styles.statusBadge} ${
                styles[
                  project.status
                    .replace(/\s+/g, "")
                    .toLowerCase()
                ]
              }`}
            >
              {project.status}
            </span>
          </td>

          <td>
            <div className={styles.progressWrapper}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${project.progress}%`,
                  }}
                />
              </div>

              <span>{project.progress}%</span>
            </div>
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

export default Projects;