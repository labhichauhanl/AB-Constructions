import styles from "./Bills.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TimelineIcon from "@mui/icons-material/Timeline";

const billAnalytics = [
    {
        title: "Paid Bills",
        value: "94",
        subtitle: "₹1.92 Cr processed",
        color: "#22C55E",
        icon: CheckCircleIcon,
    },
    {
        title: "Pending Bills",
        value: "36",
        subtitle: "₹48 L awaiting payment",
        color: "#F59E0B",
        icon: ScheduleIcon,
    },
    {
        title: "Overdue Bills",
        value: "12",
        subtitle: "₹16 L overdue",
        color: "#EF4444",
        icon: WarningAmberIcon,
    },
    {
        title: "Avg. Payment Cycle",
        value: "18 Days",
        subtitle: "Last 90 days",
        color: "#3B82F6",
        icon: TimelineIcon,
    },
];

const bills = [
    {
        id: "BILL-001",
        vendor: "Caterpillar India",
        project: "Metro Tower",
        billDate: "12 Jul 2026",
        dueDate: "27 Jul 2026",
        amount: "₹18,50,000",
        status: "Pending",
    },
    {
        id: "BILL-002",
        vendor: "L&T Equipment",
        project: "Airport Expansion",
        billDate: "15 Jul 2026",
        dueDate: "30 Jul 2026",
        amount: "₹11,20,000",
        status: "Paid",
    },
    {
        id: "BILL-003",
        vendor: "JCB India",
        project: "City Mall",
        billDate: "05 Jul 2026",
        dueDate: "20 Jul 2026",
        amount: "₹9,75,000",
        status: "Overdue",
    },
];

function Bills() {

    const navigate = useNavigate();

    return(
        <>
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
        <h1>Supplier Bills</h1>
        <p>
            Manage supplier invoices, track outstanding liabilities, and monitor vendor billing across all projects.
        </p>

        <div className={styles.stats}>
            <div>
                <h1>₹2.40 Cr</h1>
                <span>Total Bill Value</span>
            </div>

            <div>
                <h1>142</h1>
                <span>Bills Received</span>
            </div>

            <div>
                <h1>68%</h1>
                <span>Paid Bills</span>
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
            Create Bill
        </button>

    </div>
</section>

<section className={styles.analyticsSection}>
    {billAnalytics.map((card) => {
        const Icon = card.icon;

        return (

            <div
                key={card.title}
                className={styles.analyticsCard}>

                <div
                    className={styles.analyticsIcon}
                    style={{ background: `${card.color}20` }}>
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
            <h2>Supplier Bills</h2>
            <p>
                Manage all supplier bills received across construction projects.
            </p>
        </div>
        <button className={styles.createBtn}>
            + Create Bill
        </button>
    </div>

    <table className={styles.billTable}>
        <thead>
            <tr>
                <th>Bill No.</th>
                <th>Vendor</th>
                <th>Project</th>
                <th>Bill Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>

            {bills.map((bill) => (

                <tr key={bill.id}>
                    <td>{bill.id}</td>
                    <td>{bill.vendor}</td>
                    <td>{bill.project}</td>
                    <td>{bill.billDate}</td>
                    <td>{bill.dueDate}</td>
                    <td>{bill.amount}</td>
                    <td>
                        <span
                            className={`${styles.status} ${
                                styles[bill.status.toLowerCase()]
                            }`}>
                            {bill.status}
                        </span>
                    </td>
                    <td>
                        <button
                            className={styles.viewBtn}
                            onClick={() =>
                                navigate(`/bill-details/${bill.id}`)
                            }>
                            View Details
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</section>

        </>
    )
}

export default Bills;