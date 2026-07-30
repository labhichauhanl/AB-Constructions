import styles from "./PaymentsCompleted.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TimelineIcon from "@mui/icons-material/Timeline";

const paymentAnalytics = [
    {
        title: "Completed Payments",
        value: "94",
        subtitle: "₹1.92 Cr processed",
        color: "#22C55E",
        icon: CheckCircleIcon,
    },
    {
        title: "This Month",
        value: "18",
        subtitle: "₹42 L paid",
        color: "#3B82F6",
        icon: TimelineIcon,
    },
    {
        title: "Average Cycle",
        value: "18 Days",
        subtitle: "Vendor payments",
        color: "#F59E0B",
        icon: ScheduleIcon,
    },
    {
        title: "Successful Transactions",
        value: "100%",
        subtitle: "No failed payments",
        color: "#8B5CF6",
        icon: CheckCircleIcon,
    },
];

const payments = [
    {
        id: "PAY-001",
        bill: "BILL-001",
        vendor: "Caterpillar India",
        project: "Metro Tower",
        paymentDate: "18 Jul 2026",
        mode: "Bank Transfer",
        amount: "₹10,00,000",
        status: "Completed",
    },
    {
        id: "PAY-002",
        bill: "BILL-002",
        vendor: "L&T Equipment",
        project: "Airport Expansion",
        paymentDate: "28 Jul 2026",
        mode: "NEFT",
        amount: "₹12,34,400",
        status: "Completed",
    },
    {
        id: "PAY-003",
        bill: "BILL-003",
        vendor: "JCB India",
        project: "City Mall",
        paymentDate: "22 Jul 2026",
        mode: "RTGS",
        amount: "₹8,75,000",
        status: "Completed",
    },
];

function PaymentsCompleted() {

    const navigate = useNavigate();

    return (
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
                    <h1>Payments Completed</h1>
                    <p>
                        Track completed vendor payments, monitor transaction history,
                        and review payment records across all construction projects.
                    </p>

                    <div className={styles.stats}>
                        <div>
                            <h1>₹1.92 Cr</h1>
                            <span>Total Paid</span>
                        </div>

                        <div>
                            <h1>94</h1>
                            <span>Payments Completed</span>
                        </div>

                        <div>
                            <h1>18 Days</h1>
                            <span>Avg Payment Cycle</span>
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
                        Create Payment
                    </button>
                </div>
            </section>
            <section className={styles.analyticsSection}>
                {paymentAnalytics.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div className={styles.analyticsCard} key={item.title}>
                            <div
                                className={styles.analyticsIcon}
                                style={{
                                    background: `${item.color}15`,
                                    color: item.color,}}>
                                <Icon fontSize="medium" />
                            </div>

                            <div className={styles.analyticsContent}>
                                <span>{item.title}</span>
                                <h2>{item.value}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
            <section className={styles.tableSection}>

                <div className={styles.tableHeader}>
                    <div>
                        <h2>Completed Payments</h2>
                        <p>Monitor all completed vendor payments across projects.</p>
                    </div>
                </div>

                <table className={styles.billTable}>
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Bill No.</th>
                            <th>Vendor</th>
                            <th>Project</th>
                            <th>Payment Date</th>
                            <th>Mode</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {payments.map((payment) => (

                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.bill}</td>
                                <td>{payment.vendor}</td>
                                <td>{payment.project}</td>
                                <td>{payment.paymentDate}</td>
                                <td>{payment.mode}</td>
                                <td>{payment.amount}</td>

                                <td>
                                    <span className={`${styles.status} ${styles.paid}`}>
                                        {payment.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default PaymentsCompleted;