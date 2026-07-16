import styles from "./RequirementDetails.module.css";
import { useParams } from "react-router-dom";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { useState } from "react";

function RequirementDetails() {

    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("information");

    return (
        <div className={styles.detailsPage}>
            <div className={styles.headerSection}>
                <div className={styles.kpiGrid}>

                    <div className={styles.kpiCard}>
                        <div className={styles.kpiHeader}>
                            <PriorityHighIcon className={styles.kpiIcon} />
                            <h3>Priority</h3>
                        </div>
                        <h2>High</h2>
                        <p>Urgent requirement</p>
                    </div>

                    <div className={styles.kpiCard}>
                        <div className={styles.kpiHeader}>
                            <PendingActionsIcon className={styles.kpiIcon} />
                            <h3>Status</h3>
                        </div>
                        <h2>Pending</h2>
                        <p>Awaiting approval</p>
                    </div>

                    <div className={styles.kpiCard}>
                        <div className={styles.kpiHeader}>
                            <CalendarMonthIcon className={styles.kpiIcon} />
                            <h3>Duration</h3>
                        </div>
                        <h2>10 Days</h2>
                        <p>15 Jul - 25 Jul</p>
                    </div>

                    <div className={styles.kpiCard}>
                        <div className={styles.kpiHeader}>
                            <RequestQuoteIcon className={styles.kpiIcon} />
                            <h3>Quotations</h3>
                        </div>
                        <h2>3</h2>
                        <p>Vendor responses received</p>
                    </div>
                </div>

                <div className={styles.workflowCard}>
    <h3>Approval Workflow</h3>

    <div className={styles.workflowContainer}>

        <div className={styles.workflowStep}>
            <div className={`${styles.workflowCircle} ${styles.completedStep}`}>
                ✓
            </div>
            <span>Draft</span>
        </div>

        <div className={styles.workflowLine}></div>

        <div className={styles.workflowStep}>
            <div className={`${styles.workflowCircle} ${styles.completedStep}`}>
                ✓
            </div>
            <span>Pending Approval</span>
        </div>

        <div className={styles.workflowLine}></div>

        <div className={styles.workflowStep}>
            <div className={`${styles.workflowCircle} ${styles.activeStep}`}>
                3
            </div>
            <span>Approved</span>
        </div>

        <div className={styles.workflowLine}></div>

        <div className={styles.workflowStep}>
            <div className={styles.workflowCircle}>
                4
            </div>
            <span>Procurement</span>
        </div>

        <div className={styles.workflowLine}></div>

        <div className={styles.workflowStep}>
            <div className={styles.workflowCircle}>
                5
            </div>
            <span>Completed</span>
        </div>

    </div>
</div>

                <div className={styles.tabContainer}>
                    <button
                        className={activeTab === "information" ? styles.activeTab : styles.tabButton}
                        onClick={() => setActiveTab("information")}>
                        Information
                    </button>

                    <button
                        className={activeTab === "operations" ? styles.activeTab : styles.tabButton}
                        onClick={() => setActiveTab("operations")}>
                        Operations
                    </button>

                    <button
                        className={activeTab === "quotations" ? styles.activeTab : styles.tabButton}
                        onClick={() => setActiveTab("quotations")}>
                        Quotations
                    </button>

                    <button
                        className={activeTab === "history" ? styles.activeTab : styles.tabButton}
                        onClick={() => setActiveTab("history")}>
                        History
                    </button>
                </div>

                {activeTab === "information" && (
                    <div className={styles.contentCard}>
                        <h2>Requirement Information</h2>

                        <div className={styles.detailRow}>
                            <span>Requirement ID</span>
                            <strong>{id}</strong>
                        </div>

                        <div className={styles.detailRow}>
                            <span>Requested By</span>
                            <strong>Rahul Sharma</strong>
                        </div>

                        <div className={styles.detailRow}>
                            <span>Department</span>
                            <strong>Construction</strong>
                        </div>

                        <div className={styles.detailRow}>
                            <span>Created On</span>
                            <strong>15 Jul 2026</strong>
                        </div>

                        <div className={styles.detailRow}>
                            <span>Priority</span>
                            <strong>High</strong>
                        </div>

                        <div className={styles.detailRow}>
                            <span>Status</span>
                            <strong>Pending</strong>
                        </div>
                    </div>
                )}

                {activeTab === "operations" && (
                    <div className={styles.operationsGrid}>

                        <div className={styles.contentCard}>
                            <h2>Machine Details</h2>

                            <div className={styles.detailRow}>
                                <span>Machine Type</span>
                                <strong>Transit Mixer</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Capacity Required</span>
                                <strong>8 m³</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Quantity Required</span>
                                <strong>2</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Operators Required</span>
                                <strong>2</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Expected Utilization</span>
                                <strong>85%</strong>
                            </div>
                        </div>


                        <div className={styles.contentCard}>
                            <h2>Schedule Details</h2>

                            <div className={styles.detailRow}>
                                <span>From Date</span>
                                <strong>20 Jul 2026</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>To Date</span>
                                <strong>30 Jul 2026</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Duration</span>
                                <strong>10 Days</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Shift Type</span>
                                <strong>Day Shift</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Working Hours</span>
                                <strong>08:00 - 18:00</strong>
                            </div>
                        </div>


                        <div className={styles.contentCard}>
                            <h2>Operational Details</h2>

                            <div className={styles.detailRow}>
                                <span>Nature of Work</span>
                                <strong>
                                    Concrete pouring for basement slabs
                                </strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Site Conditions</span>
                                <strong>Urban constrained site</strong>
                            </div>

                            <div className={styles.detailRow}>
                                <span>Expected Utilization</span>
                                <strong>85%</strong>
                            </div>
                        </div>

                    </div>
                )}

                {activeTab === "quotations" && (
                    <div className={styles.contentCard}>

                        <h2>Vendor Quotations</h2>

                        <table className={styles.quotationTable}>
                            <thead>
                                <tr>
                                    <th>Vendor</th>
                                    <th>Quoted Price</th>
                                    <th>Delivery</th>
                                    <th>Rating</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>ABC Equipment Rentals</td>
                                    <td>₹1,20,000</td>
                                    <td>2 Days</td>
                                    <td>⭐ 4.8</td>
                                    <td>Recommended</td>
                                </tr>

                                <tr>
                                    <td>Rapid Machinery</td>
                                    <td>₹1,15,000</td>
                                    <td>3 Days</td>
                                    <td>⭐ 4.5</td>
                                    <td>Under Review</td>
                                </tr>

                                <tr>
                                    <td>Prime Infra Rentals</td>
                                    <td>₹1,28,000</td>
                                    <td>1 Day</td>
                                    <td>⭐ 4.9</td>
                                    <td>Alternative</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                )}

                {activeTab === "history" && (
                    <div className={styles.contentCard}>

                        <h2>Requirement Timeline</h2>

                        <div className={styles.timeline}>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>

                                <div className={styles.timelineContent}>
                                    <h4>Requirement Created</h4>
                                    <p>Rahul Sharma created the requirement.</p>
                                    <span>15 Jul 2026 • 09:30 AM</span>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>

                                <div className={styles.timelineContent}>
                                    <h4>Manager Approval Requested</h4>
                                    <p>Requirement forwarded for approval.</p>
                                    <span>15 Jul 2026 • 11:00 AM</span>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>

                                <div className={styles.timelineContent}>
                                    <h4>Quotation Requests Sent</h4>
                                    <p>Requests sent to 3 vendors.</p>
                                    <span>16 Jul 2026 • 10:15 AM</span>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>

                                <div className={styles.timelineContent}>
                                    <h4>Vendor Responses Received</h4>
                                    <p>All quotations received successfully.</p>
                                    <span>18 Jul 2026 • 05:40 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default RequirementDetails;