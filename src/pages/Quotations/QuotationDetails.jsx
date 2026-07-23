import styles from "./QuotationDetails.module.css";
import { useParams } from "react-router-dom";

function QuotationDetails() {
    const { id } = useParams();

    return (
        <>
            <div className={styles.headerSection}>
                <div className={styles.headerInfo}>
                    <span className={styles.requirementId}> {id} </span>
                    <h1>Transit Mixer ×2</h1>
                    <h2>Commercial Complex</h2>
                    <p>3 Vendor Quotations Received</p>
                </div>

                <div className={styles.headerActions}>
                    <button className={styles.compareButton}>
                        Compare Vendors
                    </button>

                    <button className={styles.backButton}>
                        Back
                    </button>
                </div>
            </div>

            <section className={styles.kpiGrid}>

                <div className={styles.kpiCard}>
                    <h4>Lowest Quote</h4>
                    <h2>₹1.15 L</h2>
                    <p>Rapid Machinery</p>
                </div>

                <div className={styles.kpiCard}>
                    <h4>Fastest Delivery</h4>
                    <h2>1 Day</h2>
                    <p>Heavy Earth Movers</p>
                </div>

                <div className={styles.kpiCard}>
                    <h4>Best Rated Vendor</h4>
                    <h2>4.9</h2>
                    <p>SkyLift Cranes</p>
                </div>

                <div className={styles.kpiCard}>
                    <h4>Potential Savings</h4>
                    <h2>₹13,000</h2>
                    <p>Compared to highest quote</p>
                </div>

            </section>

            <section className={styles.comparisonSection}>

    <h2>Vendor Comparison</h2>

    <table className={styles.comparisonTable}>

        <thead>
            <tr>
                <th>Criteria</th>
                <th>ABC Equipment</th>
                <th>Rapid Machinery</th>
                <th>Heavy Earth Movers</th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <td>Quoted Price</td>
                <td>₹1,20,000</td>
                <td>₹1,15,000</td>
                <td>₹2,10,000</td>
            </tr>

            <tr>
                <td>Delivery Time</td>
                <td>2 Days</td>
                <td>3 Days</td>
                <td>1 Day</td>
            </tr>

            <tr>
                <td>Vendor Rating</td>
                <td>⭐ 4.8</td>
                <td>⭐ 4.5</td>
                <td>⭐ 4.7</td>
            </tr>

            <tr>
                <td>Availability</td>
                <td>Available</td>
                <td>Available</td>
                <td>Available</td>
            </tr>

            <tr>
                <td>Operator Included</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
            </tr>

            <tr>
                <td>Insurance Included</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>

            <tr>
                <td>Recommendation</td>
                <td>🏆 Best Overall</td>
                <td>💰 Cheapest</td>
                <td>⚡ Fastest</td>
            </tr>
        </tbody>
    </table>
</section>

    <section className={styles.actionSection}>
    <h2>Procurement Actions</h2>
    <div className={styles.actionButtons}>

        <button className={styles.primaryAction}>
            Approve Vendor
        </button>

        <button className={styles.secondaryAction}>
            Send for Negotiation
        </button>

        <button className={styles.secondaryAction}>
            Request Revised Quote
        </button>

        <button className={styles.endAction}>
            Reject All Quotations
        </button>

    </div>
</section>

        </>
    );
}

export default QuotationDetails;