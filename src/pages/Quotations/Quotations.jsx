import styles from "./Quotations.module.css";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React, { useState } from "react";

const quotationData = [
  {
    quoteId: "QT-1001",
    requirementId: "REQ-1001",
    machine: "Transit Mixer",
    project: "Commercial Complex",
    vendor: "ABC Equipment Rentals",
    vendorRating: 4.8,
    contactPerson: "Rohit Gupta",
    phone: "+91 9876543210",
    email: "rohit@abcequipment.com",
    quotedPrice: 120000,
    rentalCost: 100000,
    transportationCost: 10000,
    operatorCharges: 5000,
    taxes: 5000,
    totalCost: 120000,
    deliveryTime: "2 Days",
    pickupDate: "2026-07-31",
    availability: "Available",
    mobilizationTime: "24 Hours",
    paymentTerms: "30 Days Credit",
    securityDeposit: "₹20,000",
    fuelIncluded: false,
    operatorIncluded: true,
    insuranceIncluded: true,
    approvalStatus: "Pending",
    recommendationScore: 92,
    recommended: true,
    createdOn: "2026-07-18",
  },

  {
    quoteId: "QT-1002",
    requirementId: "REQ-1001",
    machine: "Transit Mixer",
    project: "Commercial Complex",
    vendor: "Rapid Machinery",
    vendorRating: 4.5,
    contactPerson: "Ankit Sharma",
    phone: "+91 9988776655",
    email: "ankit@rapidmachinery.com",
    quotedPrice: 115000,
    rentalCost: 95000,
    transportationCost: 12000,
    operatorCharges: 3000,
    taxes: 5000,
    totalCost: 115000,
    deliveryTime: "3 Days",
    pickupDate: "2026-07-31",
    availability: "Available",
    mobilizationTime: "36 Hours",
    paymentTerms: "Advance Payment",
    securityDeposit: "₹25,000",
    fuelIncluded: false,
    operatorIncluded: false,
    insuranceIncluded: true,
    approvalStatus: "Approved",
    recommendationScore: 89,
    recommended: false,
    createdOn: "2026-07-19",
  },

  {
    quoteId: "QT-1003",
    requirementId: "REQ-1002",
    machine: "Excavator",
    project: "Residential Towers",
    vendor: "Heavy Earth Movers",
    vendorRating: 4.7,
    contactPerson: "Vikram Singh",
    phone: "+91 9123456789",
    email: "vikram@heavyearth.com",
    quotedPrice: 210000,
    rentalCost: 180000,
    transportationCost: 15000,
    operatorCharges: 10000,
    taxes: 5000,
    totalCost: 210000,
    deliveryTime: "1 Day",
    pickupDate: "2026-08-11",
    availability: "Available",
    mobilizationTime: "12 Hours",
    paymentTerms: "15 Days Credit",
    securityDeposit: "₹50,000",
    fuelIncluded: true,
    operatorIncluded: true,
    insuranceIncluded: true,
    approvalStatus: "Pending",
    recommendationScore: 95,
    recommended: true,
    createdOn: "2026-07-20",
  },

  {
    quoteId: "QT-1004",
    requirementId: "REQ-1003",
    machine: "Tower Crane",
    project: "Industrial Warehouse",
    vendor: "SkyLift Cranes",
    vendorRating: 4.9,
    contactPerson: "Sanjay Mehta",
    phone: "+91 9012345678",
    email: "sanjay@skylift.com",
    quotedPrice: 480000,
    rentalCost: 420000,
    transportationCost: 30000,
    operatorCharges: 20000,
    taxes: 10000,
    totalCost: 480000,
    deliveryTime: "5 Days",
    pickupDate: "2026-08-21",
    availability: "Available",
    mobilizationTime: "48 Hours",
    paymentTerms: "45 Days Credit",
    securityDeposit: "₹1,00,000",
    fuelIncluded: true,
    operatorIncluded: true,
    insuranceIncluded: true,
    approvalStatus: "Negotiation",
    recommendationScore: 91,
    recommended: false,
    createdOn: "2026-07-22",
  }
];

function Quotations() {

  const pendingQuotations = quotationData.filter(quote => quote.approvalStatus === "Pending").length;
  const approvedQuotations = quotationData.filter(quote => quote.approvalStatus === "Approved").length;
  const averageVendorRating = (quotationData.reduce((sum, quote) => sum + quote.vendorRating, 0) / quotationData.length).toFixed(1);
  const procurementValue = quotationData.reduce((sum, quote) => sum + quote.totalCost, 0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("All");
  const [selectedProject, setSelectedProject] = useState("All");
  const [selectedMachine, setSelectedMachine] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("Created Date");
  const [expandedQuotation, setExpandedQuotation] = useState(null);

  const vendors = ["All", ...new Set(quotationData.map(q => q.vendor))];
  const projects = ["All", ...new Set(quotationData.map(q => q.project))];
  const machines = ["All", ...new Set(quotationData.map(q => q.machine))];

  const filteredQuotations = quotationData.filter(quote => {
    const matchesSearch = quote.vendor.toLowerCase().includes(searchTerm.toLowerCase()) || quote.quoteId.toLowerCase().includes(searchTerm.toLowerCase()) || quote.requirementId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVendor = selectedVendor === "All" || quote.vendor === selectedVendor;
    const matchesProject = selectedProject === "All" || quote.project === selectedProject;
    const matchesMachine = selectedMachine === "All" || quote.machine === selectedMachine;
    const matchesStatus = selectedStatus === "All" || quote.approvalStatus === selectedStatus;
    return (matchesSearch && matchesVendor && matchesProject && matchesMachine && matchesStatus);
  });

  return (
    <div className={styles.quotationsPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Quotations</h1>
          <p>
            Manage supplier quotations and approvals.
          </p>
        </div>

        <button className={styles.addButton}>
          + New Quotation
        </button>
      </div>

      <section className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <PendingActionsIcon className={styles.cardIcon} />
            <h3>Pending Quotations</h3>
          </div>
          <h2>{pendingQuotations}</h2>
          <p>Awaiting approval</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <TaskAltIcon className={styles.cardIcon} />
            <h3>Approved Quotations</h3>
          </div>
          <h2>{approvedQuotations}</h2>
          <p>Ready for procurement</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <StarIcon className={styles.cardIcon} />
            <h3>Average Rating</h3>
          </div>
          <h2>{averageVendorRating}</h2>
          <p>Across all vendors</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <CurrencyRupeeIcon className={styles.cardIcon} />
            <h3>Procurement Value</h3>
          </div>
          <h2>₹{(procurementValue / 100000).toFixed(1)}L</h2>
          <p>Total quotation value</p>
        </div>
      </section>

      <section className={styles.filterSection}>

        <div className={styles.filterGroup}>
          <label>Search</label>
          <input
            type="text"
            placeholder="Search quotation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput} />
        </div>

        <div className={styles.filterGroup}>
          <label>Vendor</label>
          <select
            className={styles.filterSelect}
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}>
            {vendors.map(vendor => (
              <option key={vendor} value={vendor}>
                {vendor}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Project</label>
          <select
            className={styles.filterSelect}
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}>
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
            onChange={(e) => setSelectedMachine(e.target.value)}>
            {machines.map(machine => (
              <option
                key={machine}
                value={machine}>
                {machine}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Status</label>
          <select
            className={styles.filterSelect}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}>
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Negotiation</option>
            <option>Rejected</option>
          </select>
        </div>
      </section>

      <section className={styles.tableSection}>
        <table className={styles.quotationTable}>
          <thead>
            <tr>
              <th>Quote ID</th>
              <th>Requirement ID</th>
              <th>Vendor</th>
              <th>Machine</th>
              <th>Price</th>
              <th>Delivery</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredQuotations.map((quote) => (
              <React.Fragment key={quote.quoteId}>
                <tr>
                  <td>{quote.quoteId}</td>
                  <td>{quote.requirementId}</td>
                  <td>
                    <div className={styles.vendorCell}>
                      <strong>{quote.vendor}</strong>
                      <span>⭐ {quote.vendorRating}</span>
                    </div>
                  </td>
                  <td>{quote.machine}</td>
                  <td>
                    ₹{quote.totalCost.toLocaleString("en-IN")}
                  </td>
                  <td>{quote.deliveryTime}</td>
                  <td>
                    <span
                      className={`${styles.statusBadge} ${styles[quote.approvalStatus.replace(/\s+/g, "").toLowerCase()]}`}>
                      {quote.approvalStatus}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actionButtons}>
                      <button
                        className={styles.viewButton}
                        onClick={() => setExpandedQuotation(expandedQuotation === quote.quoteId ? null : quote.quoteId)}>
                        {expandedQuotation === quote.quoteId ? "Hide" : "View"}
                      </button>

                      <button className={styles.editButton}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedQuotation === quote.quoteId && (
                  <tr>
                    <td colSpan="8">
                      <div className={styles.quotationDetails}>

                        <div className={styles.detailCard}>
                          <h3>Vendor Information</h3>

                          <div className={styles.detailRow}>
                            <span>Vendor Name</span>
                            <strong>{quote.vendor}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Contact Person</span>
                            <strong>{quote.contactPerson}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Phone Number</span>
                            <strong>{quote.phone}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Email Address</span>
                            <strong>{quote.email}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Vendor Rating</span>
                            <strong>
                              ⭐ {quote.vendorRating}
                            </strong>
                          </div>
                        </div>

                        <div className={styles.detailCard}>
                          <h3>Pricing Breakdown</h3>

                          <div className={styles.detailRow}>
                            <span>Machine Rental</span>
                            <strong>₹{quote.rentalCost.toLocaleString("en-IN")}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Transportation</span>
                            <strong>₹{quote.transportationCost.toLocaleString("en-IN")}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Operator Charges</span>
                            <strong>₹{quote.operatorCharges.toLocaleString("en-IN")}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Taxes</span>
                            <strong>₹{quote.taxes.toLocaleString("en-IN")}</strong>
                          </div>

                          <div className={`${styles.detailRow} ${styles.totalRow}`}>
                            <span>Total Cost</span>
                            <strong>₹{quote.totalCost.toLocaleString("en-IN")}</strong>
                          </div>
                        </div>

                        <div className={styles.detailCard}>
                          <h3>Delivery Details</h3>

                          <div className={styles.detailRow}>
                            <span>Delivery Time</span>
                            <strong>{quote.deliveryTime}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Pickup Date</span>
                            <strong>{new Date(quote.pickupDate).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Availability</span>
                            <strong
                              className={quote.availability === "Available" ? styles.availableText : styles.unavailableText}>
                              {quote.availability}
                            </strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Mobilization Time</span>
                            <strong>{quote.mobilizationTime}</strong>
                          </div>
                        </div>

                        <div className={styles.detailCard}>
                          <h3>Commercial Terms</h3>
                          <div className={styles.detailRow}>
                            <span>Payment Terms</span>
                            <strong>{quote.paymentTerms}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Security Deposit</span>
                            <strong>{quote.securityDeposit}</strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Fuel Included</span>
                            <strong className={quote.fuelIncluded ? styles.included : styles.notIncluded}>
                              {quote.fuelIncluded ? "Yes" : "No"}
                            </strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Operator Included</span>
                            <strong className={ quote.operatorIncluded ? styles.included : styles.notIncluded}>
                              {quote.operatorIncluded ? "Yes" : "No"}
                            </strong>
                          </div>

                          <div className={styles.detailRow}>
                            <span>Insurance Included</span>
                            <strong
                              className={ quote.insuranceIncluded ? styles.included : styles.notIncluded }>
                              {quote.insuranceIncluded ? "Yes" : "No"}
                            </strong>
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

export default Quotations;