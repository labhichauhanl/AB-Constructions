import styles from "./Receivables.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import EventIcon from "@mui/icons-material/Event";

const receivables = [
    {
        id: "REC-001",
        invoice: "INV-001",
        customer: "ABC Developers",
        project: "Metro Tower",
        dueDate: "30 Jul 2026",
        outstanding: "₹8,50,000",
        aging: "12 Days",
        status: "Overdue",
    },
    {
        id: "REC-002",
        invoice: "INV-002",
        customer: "Skyline Infra",
        project: "Airport Expansion",
        dueDate: "04 Aug 2026",
        outstanding: "₹6,20,000",
        aging: "4 Days",
        status: "Pending",
    },
    {
        id: "REC-003",
        invoice: "INV-003",
        customer: "Green Homes",
        project: "Residential Complex",
        dueDate: "08 Aug 2026",
        outstanding: "₹4,10,000",
        aging: "Current",
        status: "Due Soon",
    },
];

const receivableAnalytics = [
    {
        title: "Outstanding Amount",
        value: "₹33 L",
        subtitle: "Awaiting customer payments",
        color: "#F59E0B",
        icon: TrendingUpIcon,
    },
    {
        title: "Pending Invoices",
        value: "8",
        subtitle: "Across 6 projects",
        color: "#3B82F6",
        icon: ReceiptLongIcon,
    },
    {
        title: "Due This Week",
        value: "₹9.4 L",
        subtitle: "3 invoices",
        color: "#EF4444",
        icon: EventIcon,
    },
    {
        title: "Collection Rate",
        value: "74%",
        subtitle: "This financial year",
        color: "#22C55E",
        icon: CheckCircleIcon,
    },
];

function Receivables() {

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
                            Outstanding Receivables
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Monitor unpaid customer invoices, track outstanding balances, and manage collections across all active construction projects.
                        </p>

                    </div>

                    <div className={styles.heroActions}>

                        <button className={styles.secondaryButton}>
                            Export
                        </button>

                        <button className={styles.primaryButton}>
                            + Create Report
                        </button>

                    </div>

                </div>

            </section>
            <section className={styles.analyticsSection}>
                {receivableAnalytics.map((card) => {
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
                        <h2>Outstanding Receivables</h2>
                        <p>Monitor unpaid customer invoices and outstanding balances.</p>
                    </div>
                    <button className={styles.createBtn}>
                        + Create Receipt
                    </button>
                </div>

                <table className={styles.receiptTable}>
                    <thead>
                        <tr>
                            <th>Invoice No.</th>
                            <th>Customer</th>
                            <th>Project</th>
                            <th>Due Date</th>
                            <th>Outstanding</th>
                            <th>Aging</th>
                            <th>Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>

                        {receivables.map((item) => (
                            <tr key={item.id}>
                                <td>{item.invoice}</td>
                                <td>{item.customer}</td>
                                <td>{item.project}</td>
                                <td>{item.dueDate}</td>
                                <td>{item.outstanding}</td>
                                <td>{item.aging}</td>
                                <td>
                                    <span
                                        className={`${styles.status} ${styles[item.status.toLowerCase().replace(/\s+/g, "")]
                                            }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className={styles.actionButtons}>

                                    <button className={styles.viewBtn}>
                                        View
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

export default Receivables;