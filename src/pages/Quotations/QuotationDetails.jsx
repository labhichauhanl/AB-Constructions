import styles from "./QuotationDetails.module.css";
import { useParams } from "react-router-dom";

function QuotationDetails() {
    const { id } = useParams();

    return (
        <div className={styles.detailsPage}>
            <div className={styles.headerSection}>
                
                <div className={styles.headerInfo}>
                    <span className={styles.quoteId}>{id}</span>
                    <h1>ABC Equipment Rentals</h1>
                    <h2>Transit Mixer</h2>
                    <p>Commercial Complex</p>
                    <span className={styles.requestInfo}>
                        Submitted for REQ-1001
                    </span>
                </div>

                <div className={styles.headerButtons}>
                    <button className={styles.editButton}>
                        Edit Quotation
                    </button>

                    <button className={styles.backButton}>
                        Back
                    </button>
                </div>

            </div>
        </div>
    );
}

export default QuotationDetails;