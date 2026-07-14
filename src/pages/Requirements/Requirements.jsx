import styles from "./Requirements.module.css";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import React, { useState } from "react";

const requirementData = [
  {
    id: "REQ-1001",
    machine: "Transit Mixer",
    capacity: "8 m³",
    quantity: 2,
    project: "Commercial Complex",
    requestedBy: "Rahul Sharma",
    department: "Construction",
    fromDate: "2026-07-20",
    toDate: "2026-07-30",
    duration: 10,
    operators: 2,
    shift: "Day Shift",
    workHours: "08:00 - 18:00",
    natureOfWork: "Concrete pouring for basement slabs",
    utilization: "85%",
    siteCondition: "Urban constrained site",
    priority: "High",
    status: "Pending",
    quotations: [
      {
        vendor: "ABC Equipment Rentals",
        price: "₹1,20,000",
        availability: "Available",
        delivery: "2 Days",
        rating: 4.8,
      },
      {
        vendor: "Rapid Machinery",
        price: "₹1,15,000",
        availability: "Available",
        delivery: "3 Days",
        rating: 4.5,
      },
      {
        vendor: "Prime Infra Rentals",
        price: "₹1,28,000",
        availability: "Available",
        delivery: "1 Day",
        rating: 4.9,
      }
    ],
    createdOn: "2026-07-15",
  },

  {
    id: "REQ-1002",
    machine: "Excavator",
    capacity: "20 Ton",
    quantity: 1,
    project: "Residential Towers",
    requestedBy: "Priya Verma",
    department: "Infrastructure",
    fromDate: "2026-07-25",
    toDate: "2026-08-10",
    duration: 16,
    operators: 1,
    shift: "Night Shift",
    workHours: "20:00 - 06:00",
    natureOfWork: "Earth excavation and grading",
    utilization: "90%",
    siteCondition: "Open highway section",
    priority: "Critical",
    status: "Approved",
    quotations: [
      {
        vendor: "Heavy Earth Movers",
        price: "₹2,10,000",
        availability: "Available",
        delivery: "1 Day",
        rating: 4.7,
      },
      {
        vendor: "BuildMax Rentals",
        price: "₹2,25,000",
        availability: "Limited",
        delivery: "4 Days",
        rating: 4.4,
      }
    ],
    createdOn: "2026-07-18",
  },

  {
    id: "REQ-1003",
    machine: "Tower Crane",
    capacity: "12 Ton",
    quantity: 1,
    project: "Industrial Warehouse",
    requestedBy: "Amit Singh",
    department: "Heavy Construction",
    fromDate: "2026-08-01",
    toDate: "2026-08-20",
    duration: 20,
    operators: 2,
    shift: "Day Shift",
    workHours: "07:00 - 17:00",
    natureOfWork: "Steel framework erection and lifting operations",
    utilization: "75%",
    siteCondition: "Industrial open site",
    priority: "Medium",
    status: "In Progress",
    quotations: [
      {
        vendor: "SkyLift Cranes",
        price: "₹4,80,000",
        availability: "Available",
        delivery: "5 Days",
        rating: 4.9,
      },
      {
        vendor: "Mega Crane Services",
        price: "₹5,10,000",
        availability: "Available",
        delivery: "7 Days",
        rating: 4.6,
      }
    ],
    createdOn: "2026-07-21",
  },
];

function Requirements() {

  const pendingRequests = requirementData.filter(req => req.status === "Pending").length;
  const approvedRequests = requirementData.filter(req => req.status === "Approved").length;
  const allocatedMachines = requirementData.reduce((sum, req) => sum + req.quantity, 0);
  const quotationsReceived = requirementData.reduce((sum, req) => sum + req.quotations.length, 0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [selectedProject, setSelectedProject] = useState("All");
  const [selectedMachine, setSelectedMachine] = useState("All");
  const [selectedRequester, setSelectedRequester] = useState("All");
  const [sortBy, setSortBy] = useState("Created Date");
  const projects = ["All", ...new Set(requirementData.map(req => req.project))];
  const machines = ["All", ...new Set(requirementData.map(req => req.machine))];
  const requesters = ["All", ...new Set(requirementData.map(req => req.requestedBy))];

  const filteredRequirements = requirementData.filter(req => {

    const matchesSearch =
      req.machine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" ||
      req.status === selectedStatus;

    const matchesPriority =
      selectedPriority === "All" ||
      req.priority === selectedPriority;

    const matchesProject =
      selectedProject === "All" ||
      req.project === selectedProject;

    const matchesMachine =
      selectedMachine === "All" ||
      req.machine === selectedMachine;

    const matchesRequester =
      selectedRequester === "All" ||
      req.requestedBy === selectedRequester;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority &&
      matchesProject &&
      matchesMachine &&
      matchesRequester
    );
  });

  const [expandedRequirement, setExpandedRequirement] = useState(null);
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  const [activeTabs, setActiveTabs] = useState({});

  return (
    <div className={styles.requirementsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Requirements</h1>
          <p>Manage equipment and workforce requests.</p>
        </div>

        <button className={styles.addButton}>
          + New Requirement
        </button>
      </div>

      <section className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <PendingActionsIcon className={styles.cardIcon} />
            <h3>Pending Requests</h3>
          </div>
          <h2>{pendingRequests}</h2>
          <p>Awaiting approval</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <TaskAltIcon className={styles.cardIcon} />
            <h3>Approved Requests</h3>
          </div>
          <h2>{approvedRequests}</h2>
          <p>Ready for allocation</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <PrecisionManufacturingIcon className={styles.cardIcon} />
            <h3>Machines Requested</h3>
          </div>
          <h2>{allocatedMachines}</h2>
          <p>Total quantity requested</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <RequestQuoteIcon className={styles.cardIcon} />
            <h3>Quotations Received</h3>
          </div>
          <h2>{quotationsReceived}</h2>
          <p>Vendor responses received</p>
        </div>
      </section>

      <section className={styles.filterSection}>

        <div className={styles.filterGroup}>
          <label>Search Projects</label>
          <input
            type="text"
            placeholder="Search requirement..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filterGroup}>
          <label>Sort By</label>
          <select
            className={styles.filterSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Created Date</option>
            <option>From Date</option>
            <option>To Date</option>
            <option>Priority</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Status</label>
          <select
            className={styles.filterSelect}
            value={selectedStatus}
            onChange={(e) =>
              setSelectedStatus(e.target.value)
            }
          >
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>In Progress</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Project</label>
          <select
            className={styles.filterSelect}
            value={selectedProject}
            onChange={(e) =>
              setSelectedProject(e.target.value)
            }
          >
            {projects.map(project => (
              <option
                key={project}
                value={project}
              >
                {project}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Machine</label>
          <select
            className={styles.filterSelect}
            value={selectedMachine}
            onChange={(e) =>
              setSelectedMachine(e.target.value)
            }
          >
            {machines.map(machine => (
              <option
                key={machine}
                value={machine}
              >
                {machine}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Requested By</label>
          <select
            className={styles.filterSelect}
            value={selectedRequester}
            onChange={(e) =>
              setSelectedRequester(e.target.value)
            }
          >
            {requesters.map(requester => (
              <option
                key={requester}
                value={requester}
              >
                {requester}
              </option>
            ))}
          </select>
        </div>

      </section>

      <section className={styles.tableSection}>
        <h2>Requirements Overview</h2>

        <table className={styles.requirementsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Machine</th>
              <th>Project</th>
              <th>Requested By</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRequirements.map((item) => {
              const currentTab = activeTabs[item.id] || "info";
              return (
                <React.Fragment key={item.id}>
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>
                      <div className={styles.machineCell}>
                        <strong>{item.quantity} × {item.machine}</strong>
                        <span>{item.capacity}</span>
                      </div>
                    </td>

                    <td>{item.project}</td>
                    <td>{item.requestedBy}</td>

                    <td>
                      <div className={styles.durationCell}>
                        <strong> {item.fromDate} </strong>
                        <span>to</span>
                        <strong>{item.toDate}</strong>
                      </div>
                    </td>

                    <td>
                      <span className={`${styles.statusBadge} ${styles[item.status.replace(/\s+/g, "").toLowerCase()]}`}> {item.status}</span>
                    </td>

                    <td>
                      <div className={styles.actionButtons}>
                        <button className={styles.viewButton}
                          onClick={() => setExpandedRequirement(expandedRequirement === item.id ? null : item.id)}>
                          {expandedRequirement === item.id ? "Hide" : "View"} </button>
                        <button className={styles.editButton}> Edit </button>
                      </div>
                    </td>
                  </tr>
                  {expandedRequirement === item.id && (
                    <tr>
                      <td colSpan="8">

                        <div className={styles.tabContainer}>

                          <button
                            className={
                              currentTab === "info"
                                ? styles.activeTab
                                : styles.tabButton
                            }
                            onClick={() =>
                              setActiveTabs({
                                ...activeTabs,
                                [item.id]: "info",
                              })
                            }
                          >
                            Requirement Info
                          </button>

                          <button
                            className={
                              currentTab === "operations" ? styles.activeTab : styles.tabButton
                            }
                            onClick={() =>
                              setActiveTabs({
                                ...activeTabs,
                                [item.id]: "operations",
                              })
                            }
                          >
                            Operations
                          </button>

                          <button
                            className={currentTab === "quotations" ? styles.activeTab : styles.tabButton}
                            onClick={() => setActiveTabs({ ...activeTabs, [item.id]: "quotations", })}>
                            Quotations
                          </button>
                        </div>

                        <div className={styles.requirementDetails}>

                          {currentTab === "info" && (

                            <div className={styles.detailCard}>
                              <h3>Requirement Information</h3>

                              <div className={styles.detailRow}>
                                <span>Requirement ID</span>
                                <strong>{item.id}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Requested By</span>
                                <strong>{item.requestedBy}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Department</span>
                                <strong>{item.department}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Created On</span>
                                <strong>{item.createdOn}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Priority</span>
                                <strong>{item.priority}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Status</span>
                                <strong>{item.status}</strong>
                              </div>
                            </div>

                          )}

                          {currentTab === "info" && (

                            <div className={styles.detailCard}>
                              <h3>Machine Details</h3>

                              <div className={styles.detailRow}>
                                <span>Machine Type</span>
                                <strong>{item.machine}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Capacity Required</span>
                                <strong>{item.capacity}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Quantity Required</span>
                                <strong>{item.quantity}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Operators Required</span>
                                <strong>{item.operators}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Expected Utilization</span>
                                <strong>{item.utilization}</strong>
                              </div>
                            </div>
                          )}

                          {currentTab === "operations" && (
                            <div className={styles.detailCard}>
                              <h3>Schedule Details</h3>

                              <div className={styles.detailRow}>
                                <span>From Date</span>
                                <strong>{formatDate(item.fromDate)}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>To Date</span>
                                <strong>{formatDate(item.toDate)}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Duration</span>
                                <strong>{item.duration} Days</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Shift Type</span>
                                <strong>{item.shift}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Working Hours</span>
                                <strong>{item.workHours}</strong>
                              </div>
                            </div>
                          )}

                          {currentTab === "operations" && (
                            <div className={styles.detailCard}>
                              <h3>Operational Details</h3>

                              <div className={styles.detailRow}>
                                <span>Operators Required</span>
                                <strong>{item.operators}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Nature of Work</span>
                                <strong>{item.natureOfWork}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Expected Utilization</span>
                                <strong>{item.utilization}</strong>
                              </div>

                              <div className={styles.detailRow}>
                                <span>Site Conditions</span>
                                <strong>{item.siteCondition}</strong>
                              </div>
                            </div>
                          )}

                          {currentTab === "quotations" && (
                            <div className={styles.detailCard}>
                              <h3>Vendor Quotations</h3>

                              <table className={styles.quotationMiniTable}>
                                <thead>
                                  <tr>
                                    <th>Vendor</th>
                                    <th>Price</th>
                                    <th>Delivery</th>
                                    <th>Rating</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  {item.quotations.map((quote, index) => (
                                    <tr key={index}>
                                      <td>{quote.vendor}</td>
                                      <td>{quote.price}</td>
                                      <td>{quote.delivery}</td>
                                      <td>⭐ {quote.rating}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>

                              {item.quotations.length > 1 && (
                                <div className={styles.recommendationBanner}>
                                  <h4>🏆 Recommended Vendor</h4>

                                  <p>
                                    {item.quotations.reduce((best, current) =>
                                      current.rating > best.rating
                                        ? current
                                        : best
                                    ).vendor}
                                  </p>

                                  <small>
                                    Best vendor rating among available quotations.
                                  </small>
                                </div>
                              )}
                            </div>
                          )}

                        </div>

                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Requirements;