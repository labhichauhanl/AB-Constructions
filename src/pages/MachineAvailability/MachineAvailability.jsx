import { useState } from "react";
import styles from "./MachineAvailability.module.css";

const machineAvailability = [
  {
    id: 1,
    machine: "Excavator EX-102",
    type: "Excavator",
    status: "In Use",
    assignedTo: "Commercial Complex",
    rentType: "Personal Use",
    bookings: [
      {
        from: "2026-07-15",
        to: "2026-07-18",
      },
      {
        from: "2026-07-25",
        to: "2026-07-28",
      },
    ],
  },
  {
    id: 2,
    machine: "Transit Mixer TM-201",
    type: "Transit Mixer",
    status: "On Rent",
    assignedTo: "ABC Infrastructures",
    rentType: "Daily Basis",
    bookings: [
      {
        from: "2026-07-20",
        to: "2026-07-22",
      },
    ],
  },
  {
    id: 3,
    machine: "Crane CR-305",
    type: "Crane",
    status: "Available",
    assignedTo: "None",
    rentType: "Weekly Basis",
    bookings: [],
  },
  {
    id: 4,
    machine: "Concrete Pump CP-110",
    type: "Concrete Pump",
    status: "Maintenance",
    assignedTo: "Workshop",
    rentType: "None",
    bookings: [
      {
        from: "2026-07-18",
        to: "2026-07-20",
      },
    ],
  },
];

function MachineAvailability() {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const availableNow = machineAvailability.filter((machine) => machine.status === "Available").length;
  const inUseNow = machineAvailability.filter((machine) => machine.status === "In Use").length;
  const onRentNow = machineAvailability.filter((machine) => machine.status === "On Rent").length;
  const maintenanceNow = machineAvailability.filter((machine) => machine.status === "Maintenance").length;
  const filteredMachines = machineAvailability.filter((machine) => {
    const matchesType = selectedType === "All" || machine.type === selectedType;
    const matchesSearch = machine.machine.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesSearch;
  }
  );

  const availableMachines =
    filteredMachines.filter((machine) => {
      if (!selectedDate) return [];
      if (machine.status.toLowerCase().trim() === "maintenance")
        return false;
      const selected = new Date(selectedDate);
      const isUnavailable = machine.bookings.some((booking) => {
        const from = new Date(booking.from);
        const to = new Date(booking.to);
        return (
          selected >= from &&
          selected <= to
        );
      });
      return !isUnavailable;
    });

  const unavailableMachines =
    filteredMachines.filter((machine) => {
      if (!selectedDate) return [];
      if (machine.status.toLowerCase().trim() === "maintenance")
        return true;
      const selected = new Date(selectedDate);
      return machine.bookings.some((booking) => {
        const from = new Date(booking.from);
        const to = new Date(booking.to);
        return (
          selected >= from &&
          selected <= to
        );
      });
    });

  const upcomingReleases = machineAvailability.filter((machine) => machine.bookings.length > 0).map((machine) => {
    const latestBooking = machine.bookings[machine.bookings.length - 1];

    return {
      machine: machine.machine,
      type: machine.type,
      availableOn: latestBooking.to,
    };
  });

  return (
    <div className={styles.availabilityPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Machine Availability</h1>
          <p>
            Track current machine status and assignments
          </p>
        </div>
      </div>

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Available Now</h3>
          <h2>{availableNow}</h2>
          <p>Ready for allocation</p>
        </div>

        <div className={styles.statCard}>
          <h3>In Use</h3>
          <h2>{inUseNow}</h2>
          <p>Currently assigned</p>
        </div>

        <div className={styles.statCard}>
          <h3>On Rent</h3>
          <h2>{onRentNow}</h2>
          <p>External rentals</p>
        </div>

        <div className={styles.statCard}>
          <h3>Maintenance</h3>
          <h2>{maintenanceNow}</h2>
          <p>Under servicing</p>
        </div>
      </section>

      <section className={styles.tableSection}>
        <table className={styles.availabilityTable}>
          <thead>
            <tr>
              <th>Machine</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Usage Type</th>
              <th>Until</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {machineAvailability.map((item) => (
              <tr key={item.id}>
                <td>{item.machine}</td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[item.status.replace(/\s+/g, "").toLowerCase()]}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>{item.assignedTo}</td>
                <td>{item.rentType}</td>
                <td>{item.bookings.length > 0 ? `${item.bookings[item.bookings.length - 1].to}` : "Ready"}</td>
                <td>
                  <div className={styles.actionButtons}>
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

      <div className={styles.searchWrapper}>
        <div className={styles.plannerSection}>
          <div className={styles.filterSection}>
            <label>Select Date</label>

            <input
              type="date"
              className={styles.dateInput}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)
              }
            />
          </div>

          <div className={styles.filterSection}>
            <label>Machine Type</label>

            <select
              className={styles.typeSelect}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)
              }
            >
              <option value="All">All</option>
              <option value="Excavator">Excavator</option>
              <option value="Transit Mixer">Transit Mixer</option>
              <option value="Crane">Crane</option>
              <option value="Concrete Pump">Concrete Pump</option>
            </select>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search machine status..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      {selectedDate && (
        <div className={styles.resultSection}>

          {/* Available Machines */}

          <section className={styles.resultCard}>
            <h2>Available Machines</h2>
            <table className={styles.resultTable}>
              <thead>
                <tr>
                  <th>Machine</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {availableMachines.map((machine) => (
                  <tr key={machine.id}>
                    <td>{machine.machine}</td>
                    <td>{machine.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Unavailable Machines */}

          <section className={styles.resultCard}>
            <h2>Unavailable Machines</h2>
            <table className={styles.resultTable}>
              <thead>
                <tr>
                  <th>Machine</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {unavailableMachines.map((machine) => (
                  <tr key={machine.id}>
                    <td>{machine.machine}</td>
                    <td>{machine.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      )}

      <section className={styles.releaseSection}>
        <h2>Upcoming Releases</h2>
        <table className={styles.releaseTable}>
          <thead>
            <tr>
              <th>Machine</th>
              <th>Type</th>
              <th>Available On</th>
            </tr>
          </thead>

          <tbody>
            {upcomingReleases.map((machine, index) => (
              <tr key={index}>
                <td>{machine.machine}</td>
                <td>{machine.type}</td>
                <td>{machine.availableOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default MachineAvailability;