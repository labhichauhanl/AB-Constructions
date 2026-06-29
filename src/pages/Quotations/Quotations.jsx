import styles from "./Quotations.module.css";

const quotations = [
  {
    id: 1,
    requirement: "Transit Mixer",
    supplier: "ABC Infra",
    amount: "₹15,000",
    status: "Approved",
  },
  {
    id: 2,
    requirement: "Excavator",
    supplier: "BuildTech",
    amount: "₹25,000",
    status: "Pending",
  },
  {
    id: 3,
    requirement: "Concrete Supply",
    supplier: "UltraMix",
    amount: "₹75,000",
    status: "Rejected",
  },
];

function Quotations() {
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

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search quotations..."
          className={styles.searchInput}
        />
      </div>

      <section className={styles.tableSection}>
        <table className={styles.quotationTable}>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Supplier</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {quotations.map((quote) => (
              <tr key={quote.id}>
                <td>{quote.requirement}</td>
                <td>{quote.supplier}</td>
                <td>{quote.amount}</td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[
                      quote.status
                        .replace(/\s+/g, "")
                        .toLowerCase()
                      ]
                      }`}
                  >
                    {quote.status}
                  </span>
                </td>
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
    </div>
  );
}

export default Quotations;