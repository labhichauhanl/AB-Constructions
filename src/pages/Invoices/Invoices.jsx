import styles from "./Invoices.module.css";

const invoices = [
  {
    id: 1,
    invoiceNo: "INV-001",
    project: "Commercial Complex",
    amount: "₹1,25,000",
    dueDate: "15 Jun 2026",
    status: "Paid",
  },
  {
    id: 2,
    invoiceNo: "INV-002",
    project: "Luxury Villa Construction",
    amount: "₹85,000",
    dueDate: "20 Jun 2026",
    status: "Pending",
  },
  {
    id: 3,
    invoiceNo: "INV-003",
    project: "Highway Expansion",
    amount: "₹2,50,000",
    dueDate: "25 Jun 2026",
    status: "Overdue",
  },
];

function Invoices() {
  return (
    <div className={styles.invoicesPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Invoices</h1>
          <p>
            Manage billing and payment tracking.
          </p>
        </div>

        <button className={styles.addButton}>
         + Create Invoice
        </button>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search invoices..."
          className={styles.searchInput}
        />
      </div>

      <section className={styles.tableSection}>
        <table className={styles.invoiceTable}>
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Project</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.project}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.dueDate}</td>

                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[
                      invoice.status
                        .replace(/\s+/g, "")
                        .toLowerCase()
                      ]
                      }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.editButton}>
                      Edit
                    </button>

                    <button className={styles.downloadButton}>
                      Download
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

export default Invoices;