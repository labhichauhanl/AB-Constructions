import styles from "./Payables.module.css";
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
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const payables = [
    {
        id: "PAY-001",
        bill: "BILL-001",
        vendor: "Caterpillar India",
        project: "Metro Tower",
        dueDate: "31 Jul 2026",
        amount: "₹4,80,000",
        aging: "8 Days",
        status: "Overdue",
    },
    {
        id: "PAY-002",
        bill: "BILL-002",
        vendor: "L&T Equipment",
        project: "Airport Expansion",
        dueDate: "05 Aug 2026",
        amount: "₹3,20,000",
        aging: "3 Days",
        status: "Pending",
    },
    {
        id: "PAY-003",
        bill: "BILL-003",
        vendor: "JCB India",
        project: "City Mall",
        dueDate: "10 Aug 2026",
        amount: "₹2,75,000",
        aging: "Current",
        status: "Due Soon",
    },
];

const payableAnalytics = [
    {
        title: "Outstanding Payables",
        value: "₹14 L",
        subtitle: "Pending vendor payments",
        color: "#EF4444",
        icon: TrendingDownIcon,
    },
    {
        title: "Pending Bills",
        value: "5",
        subtitle: "Across 4 vendors",
        color: "#3B82F6",
        icon: ReceiptLongIcon,
    },
    {
        title: "Due This Week",
        value: "₹4.8 L",
        subtitle: "2 supplier bills",
        color: "#F59E0B",
        icon: EventIcon,
    },
    {
        title: "On-Time Payments",
        value: "91%",
        subtitle: "Vendor payment efficiency",
        color: "#22C55E",
        icon: CheckCircleIcon,
    },
];

function Payables() {

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
                            Outstanding Payables
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Monitor pending supplier bills, upcoming payment obligations, and outstanding vendor balances across all active construction projects.
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
                {payableAnalytics.map((card) => {
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
                        <h2>Outstanding Payables</h2>
                        <p>Track pending supplier bills and upcoming payment obligations.</p>
                    </div>
                    <button className={styles.createBtn}>
                        + Create Receipt
                    </button>
                </div>

                <table className={styles.receiptTable}>
                    <thead>
                        <tr>
                            <th>Bill No.</th>
                            <th>Vendor</th>
                            <th>Project</th>
                            <th>Due Date</th>
                            <th>Outstanding</th>
                            <th>Aging</th>
                            <th>Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>

                        {payables.map((item) => (
                            <tr key={item.id}>
                                <td>{item.bill}</td>
                                <td>{item.vendor}</td>
                                <td>{item.project}</td>
                                <td>{item.dueDate}</td>
                                <td>{item.amount}</td>
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

export default Payables;