import styles from "./Invoices.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const financeKPIs = [
  {
    title: "Invoices Raised",
    value: "₹1.28 Cr",
    subtitle: "+12 this month",
    icon: DescriptionIcon,
    color: "#FFC107",
    type: "invoiceRaised",
  },
  {
    title: "Invoice Receipts",
    value: "₹95 L",
    subtitle: "74% collected",
    icon: PaymentsIcon,
    color: "#22C55E",
    type: "invoiceReceipt"
  },
  {
    title: "Bills Received",
    value: "₹62 L",
    subtitle: "18 Vendor Bills",
    icon: ReceiptLongIcon,
    color: "#3B82F6",
    type: "billReceived"
  },
  {
    title: "Payments Completed",
    value: "₹48 L",
    subtitle: "14 Payments Cleared",
    icon: TaskAltIcon,
    color: "#10B981",
    type: "paymentCompleted"
  },
  {
    title: "Outstanding Receivables",
    value: "₹33 L",
    subtitle: "8 Pending Invoices",
    icon: TrendingUpIcon,
    color: "#F59E0B",
    type: "receivable"
  },
  {
    title: "Outstanding Payables",
    value: "₹14 L",
    subtitle: "5 Bills Pending",
    icon: TrendingDownIcon,
    color: "#EF4444",
    type: "payable"
  },
];

const financeSummary = [
  {
    title: "Incoming Money",
    color: "#22C55E",
    steps: [
      { label: "Invoices Raised", value: "₹1.28 Cr" },
      { label: "Payments Received", value: "₹95 L" },
      { label: "Outstanding Receivables", value: "₹33 L" },
    ],
  },
  {
    title: "Outgoing Money",
    color: "#EF4444",
    steps: [
      { label: "Bills Received", value: "₹62 L" },
      { label: "Payments Completed", value: "₹48 L" },
      { label: "Outstanding Payables", value: "₹14 L" },
    ],
  },
];

const transactionTypes = [
  "All Transactions",
  "Invoice Raised",
  "Invoice Receipt",
  "Bills Received",
  "Bill Receipt",
  "Payments Completed",
  "Payments Left",
];

const statusOptions = [
  "All Status",
  "Paid",
  "Pending",
  "Overdue",
  "Processing",
];

const financeTransactions = [
  {
    id: "INV-001",
    type: "Invoice Raised",
    project: "Metro Tower",
    party: "ABC Developers",
    amount: "₹12,50,000",
    date: "12 Jul 2026",
    status: "Paid",
    payment: "Bank Transfer",
  },

  {
    id: "INV-002",
    type: "Invoice Raised",
    project: "Mall Project",
    party: "XYZ Builders",
    amount: "₹8,20,000",
    date: "15 Jul 2026",
    status: "Pending",
    payment: "-",
  },

  {
    id: "BIL-014",
    type: "Bills Received",
    project: "Airport Expansion",
    party: "JCB Rentals",
    amount: "₹3,40,000",
    date: "18 Jul 2026",
    status: "Paid",
    payment: "UPI",
  },

  {
    id: "PAY-021",
    type: "Payments Left",
    project: "Expressway",
    party: "Ultra Cement",
    amount: "₹6,90,000",
    date: "21 Jul 2026",
    status: "Overdue",
    payment: "-",
  },
];

function Invoices() {

  const [selectedType, setSelectedType] = useState("All");
  const [transactionType, setTransactionType] = useState("All Transactions");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const navigate = useNavigate();
  const [status, setStatus] = useState("All Status");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTransactions = financeTransactions.filter((item) => {
    const matchesType = transactionType === "All Transactions" || item.type === transactionType;
    const matchesStatus = status === "All Status" || item.status === status;
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.party.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div className={styles.invoicesPage}>

      <section className={styles.headerSection}>

        <div className={styles.headerContent}>
          <span className={styles.pageTag}>Finance Management</span>
          <h1>Finance & Billing</h1>
          <p>
            Track invoices, vendor bills, payment collections,
            and outstanding balances across all construction projects.
          </p>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.primaryButton}>+ Create Invoice</button>
          <button className={styles.secondaryButton}>+ Record Payment</button>
        </div>

      </section>

      {/* KPI Cards */}
      <section className={styles.kpiSection}>
        {financeKPIs.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className={styles.kpiCard}
            >
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: `${card.color}20` }}
              >
                <Icon
                  className={styles.kpiIcon}
                  style={{ color: card.color }}
                />
              </div>

              <div className={styles.kpiContent}>
                <span>{card.title}</span>
                <h2>{card.value}</h2>
                <p>{card.subtitle}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Transaction Filter */}
      <section className={styles.filterSection}>

        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
          className={styles.filterSelect}>
          {transactionTypes.map(type => (
            <option key={type}>{type}</option>
          ))}
        </select>


        <input
          type="text"
          placeholder="Search Invoice, Vendor, Project..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput} />

        <input
          type="number"
          placeholder="Min Amount"
          value={minAmount}
          onChange={(e) => setMinAmount(e.target.value)}
          className={styles.amountInput}
        />

        <input
          type="number"
          placeholder="Max Amount"
          value={maxAmount}
          onChange={(e) => setMaxAmount(e.target.value)}
          className={styles.amountInput}
        />


        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={styles.filterSelect}>
          {statusOptions.map(status => (
            <option key={status}>{status}</option>
          ))}
        </select>


      </section>

      {/* Finance Table */}
      <section className={styles.tableSection}>
        <h2>Finance Table</h2>
        <table className={styles.financeTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Transaction</th>
              <th>Project</th>
              <th>Client / Vendor</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.type}</td>
                  <td>{item.project}</td>
                  <td>{item.party}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>
                    <span
                      className={`${styles.statusBadge} ${styles[item.status.toLowerCase()]
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className={styles.viewButton}
                      onClick={() => navigate(`/invoice-details/${item.id}`)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className={styles.noData}>
                  <div className={styles.noDataContent}>
                    <h3>No Transactions Found</h3>
                    <p>
                      No finance records match the selected filters. <br />
                      Try changing the search or filter options.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Invoices;