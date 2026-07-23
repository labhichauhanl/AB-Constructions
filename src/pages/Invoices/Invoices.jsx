import styles from "./Invoices.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useState } from "react";
import React from "react";

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

function Invoices() {

  const [selectedType, setSelectedType] = useState("All");

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

      </section>

      {/* Finance Table */}
      <section className={styles.tableSection}>

      </section>

      {/* Recent Activity */}
      <section className={styles.activitySection}>

      </section>

      {/* Alerts */}
      <section className={styles.alertSection}>

      </section>

    </div>
  );
}

export default Invoices;