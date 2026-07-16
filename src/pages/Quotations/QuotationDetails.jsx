import styles from "./QuotationDetails.module.css";
import { useParams } from "react-router-dom";

function QuotationDetails() {
    const { id } = useParams();

    return (
        <div className={styles.detailsPage}>
            <h1>{id}</h1>
        </div>
    );
}

export default QuotationDetails;