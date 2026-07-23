import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvoiceDetails.module.css";

function InvoiceDetails() {

    const navigate = useNavigate();
    const invoiceData = {
        id: "INV-001",
        status: "Paid",
        project: "Metro Tower",
        client: "ABC Developers",
        issuedDate: "12 Jul 2026",
        dueDate: "20 Jul 2026",
    };

    const summaryCards = [
        {
            title: "Invoice Amount",
            value: "₹12,50,000",
        },
        {
            title: "Amount Received",
            value: "₹8,50,000",
        },
        {
            title: "Outstanding",
            value: "₹4,00,000",
        },
        {
            title: "Payment Method",
            value: "Bank Transfer",
        },
    ];

    return (
        <div className={styles.invoiceDetailsPage}>
            <section className={styles.heroSection}>

                <div className={styles.heroTop}>
                    <button
                        className={styles.backButton}
                        onClick={() => navigate("/invoices")}>
                        ← Back to Finance
                    </button>

                    <span
                        className={`${styles.statusBadge}
            ${styles[invoiceData.status.toLowerCase()]}`}>
                        {invoiceData.status}
                    </span>
                </div>


                <div className={styles.heroMiddle}>
                    <div>
                        <h1>
                            Invoice {invoiceData.id}
                        </h1>

                        <p className={styles.projectName}>
                            {invoiceData.project}
                        </p>

                        <p className={styles.clientName}>
                            {invoiceData.client}
                        </p>
                    </div>
                </div>

                <div className={styles.heroBottom}>
                    <div className={styles.invoiceDates}>
                        <span>
                            <strong>Issued</strong>
                            <br />
                            {invoiceData.issuedDate}
                        </span>

                        <span>
                            <strong>Due</strong>
                            <br />
                            {invoiceData.dueDate}
                        </span>
                    </div>

                    <div className={styles.actionButtons}>
                        <button className={styles.primaryButton}>Download PDF</button>
                        <button className={styles.secondaryButton}>Print</button>
                        <button className={styles.secondaryButton}>Record Payment</button>
                    </div>
                </div>
            </section>

            <section className={styles.summarySection}>
                {summaryCards.map((card) => (
                    <div
                        key={card.title}
                        className={styles.summaryCard}>
                        <p>{card.title}</p>
                        <h2>{card.value}</h2>
                    </div>
                ))}
            </section>

        </div>
    );
}

export default InvoiceDetails;