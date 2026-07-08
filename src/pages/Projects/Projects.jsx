import styles from "./Projects.module.css";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    project: "Commercial Complex",
    client: "ABC Infrastructures",
    type: "Commercial",
    manager: "Rahul Sharma",
    location: "Noida",
    startDate: "2026-01-10",
    endDate: "2026-09-30",
    progress: 72,
    status: "Running",
    budget: 42000000,
    spent: 30100000,
    nextMilestone: "Concrete Pouring",
    milestoneDue: "2026-07-25",
    machines: [
      "Excavator",
      "Transit Mixer",
      "Crane",
    ],
    manpower: {
      labour: 42,
      engineers: 3,
      supervisors: 2,
    },
  },

  {
    id: 2,
    project: "Residential Towers",
    client: "Skyline Builders",
    type: "Residential",
    manager: "Priya Verma",
    location: "Delhi",
    startDate: "2026-03-15",
    endDate: "2027-02-20",
    progress: 48,
    status: "Running",
    budget: 58000000,
    spent: 24100000,
    nextMilestone: "Column Casting",
    milestoneDue: "2026-07-28",
    machines: [
      "Concrete Pump",
      "Excavator",
    ],
    manpower: {
      labour: 55,
      engineers: 5,
      supervisors: 3,
    },
  },

  {
    id: 3,
    project: "Industrial Warehouse",
    client: "SteelWorks Ltd.",
    type: "Industrial",
    manager: "Amit Singh",
    location: "Ghaziabad",
    startDate: "2026-04-01",
    endDate: "2026-12-15",
    progress: 18,
    status: "Delayed",
    budget: 31000000,
    spent: 6200000,
    nextMilestone: "Steel Framework",
    milestoneDue: "2026-08-05",
    machines: [
      "Crane",
      "Transit Mixer",
    ],
    manpower: {
      labour: 30,
      engineers: 2,
      supervisors: 2,
    },
  },
];


function Projects() {

  const activeProjects = projectData.filter((project) => project.status === "Running").length;
  const delayedProjects = projectData.filter((project) => project.status === "Delayed").length;
  const dueThisMonth = projectData.filter((project) => {
    const end = new Date(project.endDate);
    const today = new Date();
    return (
      end.getMonth() === today.getMonth() &&
      end.getFullYear() === today.getFullYear()
    );
  }).length;
  const totalContractValue = projectData.reduce((sum, project) => sum + project.budget, 0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedManager, setSelectedManager] = useState("All");
  const [selectedClient, setSelectedClient] = useState("All");
  const [sortBy, setSortBy] = useState("Start Date");
  const managers = ["All", ...new Set(projectData.map(project => project.manager))];
  const clients = ["All", ...new Set(projectData.map(project => project.client))];
  const filteredProjects = [...projectData].filter(project => {
    const matchesSearch = project.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesType = selectedType === "All" || project.type === selectedType;
    const matchesManager = selectedManager === "All" || project.manager === selectedManager;
    const matchesClient = selectedClient === "All" || project.client === selectedClient;
    return (
      matchesSearch &&
      matchesStatus &&
      matchesType &&
      matchesManager &&
      matchesClient
    );
  });
  const [expandedProject, setExpandedProject] = useState(null);

  filteredProjects.sort((a, b) => {
    switch (sortBy) {
      case "Start Date":
        return new Date(a.startDate) - new Date(b.startDate);

      case "End Date":
        return new Date(a.endDate) - new Date(b.endDate);

      case "Progress":
        return b.progress - a.progress;

      case "Budget":
        return b.budget - a.budget;

      default:
        return 0;
    }
  });
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

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

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3>Active Projects</h3>
            <FolderOpenIcon className={styles.cardIcon} />
          </div>
          <h2>{activeProjects}</h2>
          <p>Currently running</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3>Due This Month</h3>
            <CalendarMonthIcon className={styles.cardIcon} />
          </div>
          <h2>{dueThisMonth}</h2>
          <p>Closing soon</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3>Delayed Projects</h3>
            <WarningAmberIcon className={styles.cardIcon} />
          </div>
          <h2>{delayedProjects}</h2>
          <p>Require attention</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3>Total Contract Value</h3>
            <AccountBalanceWalletIcon className={styles.cardIcon} />
          </div>
          <h2>
            ₹{(totalContractValue / 10000000).toFixed(1)} Cr
          </h2>
          <p>Across all projects</p>
        </div>
      </section>

      <section className={styles.filterSection}>

        <input
          type="text"
          placeholder="Search project..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        <select
          className={styles.filterSelect}
          value={selectedStatus}
          onChange={(e) =>
            setSelectedStatus(e.target.value)
          }
        >
          <option>All</option>
          <option>Running</option>
          <option>Delayed</option>
          <option>Completed</option>
          <option>Upcoming</option>
        </select>

        <select
          className={styles.filterSelect}
          value={selectedType}
          onChange={(e) =>
            setSelectedType(e.target.value)
          }
        >
          <option>All</option>
          <option>Commercial</option>
          <option>Residential</option>
          <option>Industrial</option>
        </select>

        <select
          className={styles.filterSelect}
          value={selectedManager}
          onChange={(e) =>
            setSelectedManager(e.target.value)
          }
        >
          {managers.map(manager => (
            <option
              key={manager}
              value={manager}
            >
              {manager}
            </option>
          ))}
        </select>

        <select
          className={styles.filterSelect}
          value={selectedClient}
          onChange={(e) =>
            setSelectedClient(e.target.value)
          }
        >
          {clients.map(client => (
            <option
              key={client}
              value={client}
            >
              {client}
            </option>
          ))}
        </select>

        <select
          className={styles.filterSelect}
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option>Start Date</option>
          <option>End Date</option>
          <option>Progress</option>
          <option>Budget</option>
        </select>
      </section>

      <section className={styles.tableSection}>
        <h2>Projects Overview</h2>

        <table className={styles.projectTable}>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Type</th>
              <th>Manager</th>
              <th>Timeline</th>
              <th>Progress</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProjects.map((project) => (
              <React.Fragment key={project.id}>
                <tr>
                  <td>
                    <strong>{project.project}</strong>
                    <br />
                    <span className={styles.locationText}>
                      {project.location}
                    </span>
                  </td>
                  <td>{project.client}</td>
                  <td>{project.type}</td>
                  <td>{project.manager}</td>
                  <td>
                    <div className={styles.timeline}>
                      <span>{formatDate(project.startDate)}</span>
                      <small>to</small>
                      <span>{formatDate(project.endDate)}</span>
                    </div>
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
                    ₹{(project.budget / 10000000).toFixed(1)} Cr
                  </td>

                  <td>
                    <span
                      className={`${styles.statusBadge}
              ${project.status === "Running"
                          ? styles.running
                          : project.status === "Completed"
                            ? styles.completed
                            : project.status === "Delayed"
                              ? styles.delayed
                              : styles.upcoming
                        }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actionButtons}>
                      <button
                        className={styles.viewButton}
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      >
                        {expandedProject === project.id ? "Hide" : "View"}
                      </button>
                      <button className={styles.editButton}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedProject === project.id && (
                  <tr>
                    <td colSpan="9">
                      <div className={styles.projectDetails}>

                        <div className={styles.detailCard}>
                          <h3>Project Information</h3>

                          <div className={styles.detailRow}>
                            <span>Client</span>
                            <strong>{project.client}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Project Type</span>
                            <strong>{project.type}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Manager</span>
                            <strong>{project.manager}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Location</span>
                            <strong>{project.location}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>From</span>
                            <strong>
                              {formatDate(project.startDate)}
                            </strong>
                          </div>
                          <div className={styles.detailRow}>
                            <span>Till</span>
                            <strong>
                              {formatDate(project.endDate)}
                            </strong>
                          </div>
                        </div>
                        <div className={styles.detailCard}>
                          <h3>Budget Summary</h3>

                          <div className={styles.detailRow}>
                            <span>Total Budget</span>
                            <strong>
                              ₹{(project.budget / 10000000).toFixed(1)} Cr
                            </strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Spent</span>
                            <strong>
                              ₹{(project.spent / 10000000).toFixed(1)} Cr
                            </strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Remaining</span>
                            <strong>
                              ₹{(
                                (project.budget - project.spent) /
                                10000000
                              ).toFixed(1)} Cr
                            </strong>
                          </div>

                          <div className={styles.budgetProgress}>
                            <div className={styles.budgetBar}>
                              <div
                                className={styles.budgetFill}
                                style = {{
                                  width: `${(project.spent / project.budget) * 100}%`,
                                }}
                              />
                            </div>

                            <small>
                              {Math.round((project.spent / project.budget) * 100)}
                              % Budget Utilized
                            </small>
                          </div>
                        </div>
                        <div className={styles.detailCard}>
                          <h3>Resources</h3>
                          <div className={styles.resourceGrid}>

                            <div className={styles.resourceBox}>
                              <h2>{project.manpower.labour}</h2>
                              <span>Labour</span>
                            </div>

                            <div className={styles.resourceBox}>
                              <h2>{project.manpower.engineers}</h2>
                              <span>Engineers</span>
                            </div>

                            <div className={styles.resourceBox}>
                              <h2>{project.manpower.supervisors}</h2>
                              <span>Supervisors</span>
                            </div>

                            <div className={styles.resourceBox}>
                              <h2>
                                {project.manpower.labour +
                                  project.manpower.engineers +
                                  project.manpower.supervisors}
                              </h2>
                              <span>Total Workforce</span>
                            </div>
                          </div>
                        </div>

                        <div className={styles.detailCard}>
                          <h3>Assigned Machines</h3>

                          <div className={styles.machineGrid}>
                            {project.machines.map((machine) => (
                              <div
                                key={machine}
                                className={styles.machineCard}
                              >
                                <div className={styles.machineIcon}>
                                  🚜
                                </div>

                                <div>
                                  <strong>{machine}</strong>

                                  <p>Assigned</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
}

export default Projects;