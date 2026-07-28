import styles from "./InvoiceRaised.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TimelineIcon from "@mui/icons-material/Timeline";

const invoiceAnalytics = [
    {
        title: "Paid Invoices",
        value: "86",
        subtitle: "₹95 L collected",
        color: "#22C55E",
        icon: CheckCircleIcon,
    },
    {
        title: "Pending Invoices",
        value: "18",
        subtitle: "₹21 L awaiting payment",
        color: "#F59E0B",
        icon: ScheduleIcon,
    },
    {
        title: "Overdue Invoices",
        value: "7",
        subtitle: "₹12 L overdue",
        color: "#EF4444",
        icon: WarningAmberIcon,
    },
    {
        title: "Avg. Collection Time",
        value: "21 Days",
        subtitle: "Last 90 days",
        color: "#3B82F6",
        icon: TimelineIcon,
    },
];

const invoices = [
  {
    id: "INV-001",
    customer: "ABC Developers",
    project: "Metro Tower",
    issueDate: "12 Jul 2026",
    dueDate: "27 Jul 2026",
    amount: "₹12,50,000",
    status: "Paid",
  },
  {
    id: "INV-002",
    customer: "XYZ Builders",
    project: "Airport Expansion",
    issueDate: "15 Jul 2026",
    dueDate: "30 Jul 2026",
    amount: "₹8,20,000",
    status: "Pending",
  },
  {
    id: "INV-003",
    customer: "Prestige Infra",
    project: "City Mall",
    issueDate: "05 Jul 2026",
    dueDate: "20 Jul 2026",
    amount: "₹18,75,000",
    status: "Overdue",
  },
];

function InvoiceRaised() {

    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.left}>
                    <button
                        className={styles.backBtn}
                        onClick={() => navigate(-1)}>
                        <ArrowBackIcon fontSize="small" />
                        Back
                    </button>
                    <span className={styles.tag}>
                        Finance Management
                    </span>
                    <h1>Invoices Raised</h1>
                    <p>
                        Manage and monitor all customer invoices issued
                        across ongoing construction projects.
                    </p>

                    <div className={styles.stats}>

                        <div>
                            <h1>₹1.28 Cr</h1>
                            <span>Total Invoice Value</span>
                        </div>

                        <div>
                            <h1>12</h1>
                            <span>Invoices Raised</span>
                        </div>

                        <div>
                            <h1>74%</h1>
                            <span>Collection Rate</span>
                        </div>

                    </div>

                </div>

                <div className={styles.right}>

                    <button className={styles.secondaryBtn}>
                        <DownloadIcon />
                        Export
                    </button>

                    <button className={styles.primaryBtn}>
                        <AddIcon />
                        Create Invoice
                    </button>
                </div>
            </section>

            <section className={styles.analyticsSection}>
                {invoiceAnalytics.map((card) => {
                    const Icon = card.icon;
                    return (

                        <div
                            key={card.title}
                            className={styles.analyticsCard}
                        >
                            <div
                                className={styles.analyticsIcon}
                                style={{ background: `${card.color}20` }}
                            >
                                <Icon
                                    style={{ color: card.color }}
                                />
                            </div>

                            <div className={styles.analyticsContent}>
                                <span>{card.title}</span>
                                <h2>{card.value}</h2>
                                <p>{card.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
                <section className={styles.tableSection}>

  <div className={styles.tableHeader}>

    <div>
      <h2>Invoices</h2>
      <p>
        Manage all customer invoices issued across construction projects.
      </p>
    </div>

    <button className={styles.createBtn}>
      + Create Invoice
    </button>

  </div>

  <table className={styles.invoiceTable}>

    <thead>

      <tr>
        <th>Invoice No.</th>
        <th>Customer</th>
        <th>Project</th>
        <th>Issue Date</th>
        <th>Due Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th></th>
      </tr>

    </thead>

    <tbody>

      {invoices.map((invoice) => (

        <tr key={invoice.id}>
          <td>{invoice.id}</td>
          <td>{invoice.customer}</td>
          <td>{invoice.project}</td>
          <td>{invoice.issueDate}</td>
          <td>{invoice.dueDate}</td>
          <td>{invoice.amount}</td>
          <td>
            <span
              className={`${styles.status} ${
                styles[invoice.status.toLowerCase()]
              }`}
            >
              {invoice.status}
            </span>
          </td>
          <td>
            <button className={styles.viewBtn}
            onClick={() => navigate(`/invoice-details/${invoice.id}`)}
            >
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

        </div>
    );
}

export default InvoiceRaised;