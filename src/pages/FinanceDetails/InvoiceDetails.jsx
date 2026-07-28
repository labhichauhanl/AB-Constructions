import styles from "./InvoiceDetails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import invoiceDetailsData from "../../data/invoiceDetailsData";
import { useState } from "react";

function InvoiceDetails() {

    const navigate = useNavigate();
    const { id } = useParams();
    const invoice = invoiceDetailsData.find(item => item.id === id);
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "addresses",
    label: "Addresses",
  },
  {
    id: "lineItems",
    label: "Line Items",
  },
  {
    id: "payments",
    label: "Payments",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "timeline",
    label: "Timeline",
  },
];

    return (

        <div className={styles.page}>

            <section className={styles.hero}>

                <div className={styles.left}>

                    <button
                        className={styles.backBtn}
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIcon fontSize="small" />
                        Back
                    </button>

                    <span className={styles.tag}>
                        Finance Management
                    </span>

                    <h1>Invoice Details</h1>

                    <p>
                        Complete information for invoice <strong>{id}</strong>.
                    </p>

                    <div className={styles.infoGrid}>

                        <div>
                            <span>Invoice Number</span>
                            <h3>{id}</h3>
                        </div>

                        <div>
                            <span>Customer</span>
                            <h3>{invoice.customer}</h3>
                        </div>

                        <div>
                            <span>Project</span>
                            <h3>{invoice.project}</h3>
                        </div>

                    </div>

                </div>

                <div className={styles.right}>

                    <div className={styles.summaryCard}>

                        <span>Total Amount</span>

                        <h1>{invoice.amount}</h1>

                        <div className={styles.status}>

                            <CheckCircleIcon fontSize="small"/>

                            {invoice.status}

                        </div>

                        <small>
                            Due on 27 Jul 2026
                        </small>

                    </div>

                    <div className={styles.actions}>

                        <button className={styles.secondaryBtn}>
                            <PrintIcon fontSize="small"/>
                            Print
                        </button>

                        <button className={styles.primaryBtn}>
                            <DownloadIcon fontSize="small"/>
                            Download PDF
                        </button>

                    </div>

                </div>

            </section>

            <section className={styles.tabSection}>

    {tabs.map((tab) => (

        <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${styles.tabButton}
            ${activeTab === tab.id ? styles.activeTab : ""}`}
        >
            {tab.label}
        </button>

    ))}

</section>  

<section className={styles.contentSection}>

    {activeTab === "overview" && (
        <h2>Overview Content</h2>
    )}

    {activeTab === "addresses" && (
        <h2>Addresses Content</h2>
    )}

    {activeTab === "lineItems" && (
        <h2>Line Items Content</h2>
    )}

    {activeTab === "payments" && (
        <h2>Payments Content</h2>
    )}

    {activeTab === "documents" && (
        <h2>Documents Content</h2>
    )}

    {activeTab === "timeline" && (
        <h2>Timeline Content</h2>
    )}

</section>

        </div>

    );

}

export default InvoiceDetails;