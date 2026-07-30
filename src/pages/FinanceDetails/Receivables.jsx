import styles from "./InvoiceReceipts.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TimelineIcon from "@mui/icons-material/Timeline";

const receipts = [
    {
        id: "RCPT-001",
        invoice: "INV-001",
        customer: "ABC Developers",
        paymentMode: "Bank Transfer",
        amount: "₹12,50,000",
        date: "15 Jul 2026",
        status: "Completed",
    },
    {
        id: "RCPT-002",
        invoice: "INV-002",
        customer: "XYZ Infra",
        paymentMode: "Cheque",
        amount: "₹8,20,000",
        date: "18 Jul 2026",
        status: "Pending",
    },
    {
        id: "RCPT-003",
        invoice: "INV-003",
        customer: "Metro Builders",
        paymentMode: "UPI",
        amount: "₹2,75,000",
        date: "20 Jul 2026",
        status: "Completed",
    },
];

const receiptAnalytics = [
    {
        title: "Total Receipts",
        value: "248",
        subtitle: "Customer receipts",
        color: "#22C55E",
        icon: CheckCircleIcon,
    },
    {
        title: "Amount Received",
        value: "₹3.25 Cr",
        subtitle: "Collected till date",
        color: "#3B82F6",
        icon: TimelineIcon,
    },
    {
        title: "Pending Receipts",
        value: "18",
        subtitle: "Awaiting confirmation",
        color: "#F59E0B",
        icon: ScheduleIcon,
    },
    {
        title: "Today's Collections",
        value: "₹12.8 L",
        subtitle: "Received today",
        color: "#8B5CF6",
        icon: CheckCircleIcon,
    },
];

function InvoiceReceipts() {

    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <section className={styles.heroSection}>

                <div className={styles.heroContent}>

                    <div>

                        <span className={styles.heroTag}>
                            Finance Management
                        </span>

                        <h1 className={styles.heroTitle}>
                            Invoice Receipts
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Track customer payment receipts, monitor collections, and manage receipt records across all projects.
                        </p>

                    </div>

                    <div className={styles.heroActions}>

                        <button className={styles.secondaryButton}>
                            Export
                        </button>

                        <button className={styles.primaryButton}>
                            + Create Receipt
                        </button>

                    </div>

                </div>

            </section>
            <section className={styles.analyticsSection}>
    {receiptAnalytics.map((card) => {
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
                    <Icon style={{ color: card.color }} />
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
            <h2>Customer Receipts</h2>
            <p>
                View all payment receipts received from customers across projects.
            </p>
        </div>
        <button className={styles.createBtn}>
            + Create Receipt
        </button>
    </div>

    <table className={styles.receiptTable}>
        <thead>
            <tr>
                <th>Receipt No.</th>
                <th>Invoice No.</th>
                <th>Customer</th>
                <th>Payment Mode</th>
                <th>Received Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

            {receipts.map((receipt) => (
                <tr key={receipt.id}>
                    <td>{receipt.id}</td>
                    <td>{receipt.invoice}</td>
                    <td>{receipt.customer}</td>
                    <td>{receipt.paymentMode}</td>
                    <td>{receipt.date}</td>
                    <td>{receipt.amount}</td>
                    <td>

                        <span
                            className={`${styles.status} ${
                                styles[receipt.status.toLowerCase()]
                            }`}>
                            {receipt.status}
                        </span>
                    </td>
                    <td className={styles.actionButtons}>

                        <button className={styles.viewBtn}>
                            View
                        </button>

                        <button className={styles.downloadBtn}>
                            Download
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</section>


        </div>
    )
}

export default InvoiceReceipts;