import styles from "./MachineUtilisation.module.css";
import { useState } from "react";

const machineUsage = [
  {
    id: 1,
    machine: "Excavator EX-102",
    type: "Excavator",
    usageHistory: [
      {
        date: "2026-07-01",
        hoursWorked: 6,
        idleHours: 2,
        reason: "Waiting for material",
      },
      {
        date: "2026-07-02",
        hoursWorked: 8,
        idleHours: 0,
        reason: "Fully allocated",
      },
      {
        date: "2026-07-05",
        hoursWorked: 4,
        idleHours: 4,
        reason: "Operator unavailable",
      },
    ],
  },
  {
    id: 2,
    machine: "Transit Mixer TM-201",
    type: "Transit Mixer",
    usageHistory: [
      {
        date: "2026-07-03",
        hoursWorked: 7,
        idleHours: 1,
        reason: "Loading delay",
      },
      {
        date: "2026-07-06",
        hoursWorked: 5,
        idleHours: 3,
        reason: "Partial workday",
      },
    ],
  },
  {
    id: 3,
    machine: "Crane CR-305",
    type: "Crane",
    usageHistory: [
      {
        date: "2026-07-04",
        hoursWorked: 2,
        idleHours: 6,
        reason: "Awaiting next task",
      },
      {
        date: "2026-07-07",
        hoursWorked: 1,
        idleHours: 7,
        reason: "Low demand",
      },
    ],
  },
  {
    id: 4,
    machine: "Concrete Pump CP-110",
    type: "Concrete Pump",
    usageHistory: [
      {
        date: "2026-07-02",
        hoursWorked: 0,
        idleHours: 8,
        reason: "Maintenance",
      },
      {
        date: "2026-07-08",
        hoursWorked: 3,
        idleHours: 5,
        reason: "Testing phase",
      },
    ],
  },
];

function MachineUtilisation() {

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMachines = machineUsage.filter(
    (machine) => {
      const matchesType = selectedType === "All" || machine.type === selectedType;
      const matchesSearch = machine.machine.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    }
  );

  const utilisationData = filteredMachines.map(
    (machine) => {
      const filteredHistory = machine.usageHistory.filter((entry) => {
        if (!fromDate || !toDate) return true;
        const entryDate = new Date(entry.date);
        const start = new Date(fromDate);
        const end = new Date(toDate);


        return (
          entryDate >= start &&
          entryDate <= end
        );
      });

      const totalWorked = filteredHistory.reduce((sum, entry) => sum + entry.hoursWorked, 0);
      const totalIdle = filteredHistory.reduce((sum, entry) => sum + entry.idleHours, 0);
      const totalHours = totalWorked + totalIdle;
      const utilisation = totalHours > 0 ? Math.round((totalWorked / totalHours) * 100) : 0;

      return {
        ...machine,
        totalWorked,
        totalIdle,
        utilisation,
        filteredHistory,
      };
    }
  );

  const totalWorkedHours = utilisationData.reduce((sum, machine) => sum + machine.totalWorked, 0);
  const totalIdleHours = utilisationData.reduce((sum, machine) => sum + machine.totalIdle, 0);
  const averageUtilisation = utilisationData.length > 0 ? Math.round(utilisationData.reduce
    ((sum, machine) => sum + machine.utilisation, 0) / utilisationData.length) : 0;
  const underusedMachines = utilisationData.filter((machine) => machine.utilisation < 30).length;

  const idleAnalysis = utilisationData.flatMap(
  (machine) =>
    machine.filteredHistory
      .filter((entry) => entry.idleHours > 0)
      .map((entry) => ({
        machine: machine.machine,
        type: machine.type,
        date: entry.date,
        idleHours: entry.idleHours,
        reason: entry.reason,
      }))
);

  return (
    <div className={styles.utilisationPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Machine Utilisation</h1>
          <p>Track usage, idle time, and productivity of machines</p>
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <label>From Date</label>
          <input
            type="date"
            className={styles.dateInput}
            value={fromDate}
            onChange={(e) =>
              setFromDate(e.target.value)
            }
          />
        </div>

        <div className={styles.filterGroup}>
          <label>To Date</label>
          <input
            type="date"
            className={styles.dateInput}
            value={toDate}
            onChange={(e) =>
              setToDate(e.target.value)
            }
          />
        </div>

        <div className={styles.filterGroup}>
          <label>Machine Type</label>
          <select
            className={styles.typeSelect}
            value={selectedType}
            onChange={(e) =>
              setSelectedType(e.target.value)
            }
          >
            <option value="All">All</option>
            <option value="Excavator">Excavator</option>
            <option value="Transit Mixer">
              Transit Mixer
            </option>
            <option value="Crane">Crane</option>
            <option value="Concrete Pump">
              Concrete Pump
            </option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Search Machine</label>
          <input
            type="text"
            placeholder="Search machine..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>
      </div>

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Hours Worked</h3>
          <h2>{totalWorkedHours}</h2>
          <p>Across selected period</p>
        </div>

        <div className={styles.statCard}>
          <h3>Total Idle Hours</h3>
          <h2>{totalIdleHours}</h2>
          <p>Non-working hours</p>
        </div>

        <div className={styles.statCard}>
          <h3>Avg Utilisation</h3>
          <h2>{averageUtilisation}%</h2>
          <p>Fleet efficiency</p>
        </div>

        <div className={styles.statCard}>
          <h3>Underused Machines</h3>
          <h2>{underusedMachines}</h2>
          <p>Below 30% utilisation</p>
        </div>
      </section>

      <section className={styles.tableSection}>
        <h2>Utilisation Summary</h2>

        <table className={styles.utilisationTable}>
          <thead>
            <tr>
              <th>Machine</th>
              <th>Type</th>
              <th>Hours Worked</th>
              <th>Idle Hours</th>
              <th>Utilisation</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {utilisationData.map((machine) => (
              <tr key={machine.id}>
                <td>{machine.machine}</td>
                <td>{machine.type}</td>
                <td>{machine.totalWorked} hrs</td>
                <td>{machine.totalIdle} hrs</td>

                <td>
                  <div className={styles.progressWrapper}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${machine.utilisation}%`, }}>
                      </div>
                    </div>

                    <span>
                      {machine.utilisation}%
                    </span>
                  </div>
                </td>

                <td>
                  <span
                    className={`${styles.statusBadge} ${machine.utilisation >= 70
                      ? styles.active
                      : machine.utilisation >= 30
                        ? styles.lowusage
                        : styles.idle
                      }`}
                  >
                    {machine.utilisation >= 70
                      ? "Active"
                      : machine.utilisation >= 30
                        ? "Low Usage"
                        : "Idle"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Utilisation Table */}

            <section className={styles.tableSection}>
  <h2>Idle Analysis</h2>

  <table className={styles.utilisationTable}>
    <thead>
      <tr>
        <th>Machine</th>
        <th>Type</th>
        <th>Date</th>
        <th>Idle Hours</th>
        <th>Reason</th>
      </tr>
    </thead>

    <tbody>
      {idleAnalysis.map((entry, index) => (
        <tr key={index}>
          <td>{entry.machine}</td>
          <td>{entry.type}</td>
          <td>{entry.date}</td>
          <td>{entry.idleHours} hrs</td>
          <td>
            <span className={styles.reasonTag}>
              {entry.reason}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

<section className={styles.alertSection}>
  <h2>Underused Machine Alerts</h2>
  <div className={styles.alertGrid}>
    {utilisationData.filter((machine) => machine.utilisation < 30).map((machine) => (
        <div
          key={machine.id}
          className={styles.alertCard}
        >
          <h3>{machine.machine}</h3>
          <p>{machine.type}</p>
          <div className={styles.alertStats}>
            <span> Worked: {machine.totalWorked} hrs</span>
            <span>Idle: {machine.totalIdle} hrs</span>
          </div>
          <div className={styles.alertBadge}>
            {machine.utilisation}% Utilisation
          </div>
        </div>
      ))}
  </div>
</section>
    </div>
  );
}

export default MachineUtilisation;