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

                            <CheckCircleIcon fontSize="small" />

                            {invoice.status}

                        </div>

                        <small>
                            Due on 27 Jul 2026
                        </small>

                    </div>

                    <div className={styles.actions}>

                        <button className={styles.secondaryBtn}>
                            <PrintIcon fontSize="small" />
                            Print
                        </button>

                        <button className={styles.primaryBtn}>
                            <DownloadIcon fontSize="small" />
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

                    <div className={styles.overviewGrid}>

                        <div className={styles.infoCard}>
                            <span>Invoice Number</span>
                            <h3>{invoice.id}</h3>
                        </div>

                        <div className={styles.infoCard}>
                            <span>Customer</span>
                            <h3>{invoice.customer}</h3>
                        </div>

                        <div className={styles.infoCard}>
                            <span>Project</span>
                            <h3>{invoice.project}</h3>
                        </div>

                        <div className={styles.infoCard}>
                            <span>Status</span>
                            <h3>{invoice.status}</h3>
                        </div>

                        <div className={styles.infoCard}>
                            <span>Issue Date</span>
                            <h3>{invoice.issueDate}</h3>
                        </div>

                        <div className={styles.infoCard}>
                            <span>Due Date</span>
                            <h3>{invoice.dueDate}</h3>
                        </div>

                        <div className={styles.infoCard}>
                            <span>Payment Terms</span>
                            <h3>{invoice.paymentTerms}</h3>
                        </div>

                        <div className={styles.infoCard}>
                            <span>Created By</span>
                            <h3>{invoice.createdBy}</h3>
                        </div>

                    </div>

                )}

                {activeTab === "addresses" && (
                    <div className={styles.addressGrid}>
                        <div className={styles.addressCard}>
                            <h2>Billing Address</h2>
                            <div className={styles.addressDetails}>
                                <p><strong>Company</strong></p>
                                <span>{invoice.billingAddress.company}</span>

                                <p><strong>GSTIN</strong></p>
                                <span>{invoice.billingAddress.gst}</span>

                                <p><strong>Address</strong></p>
                                <span>{invoice.billingAddress.address}</span>

                                <p><strong>City</strong></p>
                                <span>{invoice.billingAddress.city}</span>

                                <p><strong>State</strong></p>
                                <span>{invoice.billingAddress.state}</span>

                                <p><strong>Pincode</strong></p>
                                <span>{invoice.billingAddress.pincode}</span>
                            </div>
                        </div>

                        <div className={styles.addressCard}>
                            <h2>Shipping Address</h2>
                            <div className={styles.addressDetails}>
                                <p><strong>Company</strong></p>
                                <span>{invoice.shippingAddress.company}</span>

                                <p><strong>Address</strong></p>
                                <span>{invoice.shippingAddress.address}</span>

                                <p><strong>City</strong></p>
                                <span>{invoice.shippingAddress.city}</span>

                                <p><strong>State</strong></p>
                                <span>{invoice.shippingAddress.state}</span>

                                <p><strong>Pincode</strong></p>
                                <span>{invoice.shippingAddress.pincode}</span>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "lineItems" && (
                    <div className={styles.lineItemsContainer}>
                        <table className={styles.lineItemsTable}>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Rate</th>
                                    <th>GST</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.lineItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.rate}</td>
                                        <td>{item.gst}</td>
                                        <td>{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={styles.amountSummary}>
                            <div>
                                <span>Subtotal</span>
                                <strong>{invoice.amountBreakdown.subtotal}</strong>
                            </div>

                            <div>
                                <span>GST</span>
                                <strong>{invoice.amountBreakdown.gst}</strong>
                            </div>

                            <div>
                                <span>Discount</span>
                                <strong>{invoice.amountBreakdown.discount}</strong>
                            </div>

                            <div className={styles.totalRow}>
                                <span>Grand Total</span>
                                <strong>{invoice.amountBreakdown.total}</strong>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "payments" && (
                    <div className={styles.paymentContainer}>
                        <table className={styles.paymentTable}>
                            <thead>
                                <tr>
                                    <th>Payment ID</th>
                                    <th>Date</th>
                                    <th>Mode</th>
                                    <th>Reference</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.payments.map((payment) => (
                                    <tr key={payment.id}>
                                        <td>{payment.id}</td>
                                        <td>{payment.date}</td>
                                        <td>{payment.mode}</td>
                                        <td>{payment.reference}</td>
                                        <td>{payment.amount}</td>
                                        <td>
                                            <span
                                                className={`${styles.paymentStatus}
                            ${payment.status === "Completed" ? styles.completed : styles.pending}`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === "documents" && (
                    <div className={styles.documentContainer}>
                        {invoice.documents.map((doc) => (
                            <div
                                key={doc.id}
                                className={styles.documentCard}>
                                <div>
                                    <h3>{doc.name}</h3>
                                    <p>
                                        Uploaded by {doc.uploadedBy}
                                    </p>
                                    <span>{doc.date}</span>
                                </div>

                                <div className={styles.documentActions}>
                                    <button className={styles.viewBtn}>
                                        View
                                    </button>

                                    <button className={styles.downloadBtn}>
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "timeline" && (
                    <div className={styles.timelineContainer}>
                        {invoice.timeline.map((event, index) => (
                            <div
                                key={index}
                                className={styles.timelineItem}>
                                <div className={styles.timelineLeft}>
                                    <div className={styles.timelineDot}></div>
                                    {index !== invoice.timeline.length - 1 && (
                                        <div className={styles.timelineLine}></div>
                                    )}
                                </div>

                                <div className={styles.timelineContent}>
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </section>
        </div>
    );
}

export default InvoiceDetails;