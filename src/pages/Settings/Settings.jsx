import styles from "./Settings.module.css";

function Settings() {
  return (
    <div className={styles.settingsPage}>
      <div className={styles.pageHeader}>
        <h1>Settings</h1>
        <p>
          Manage profile and application preferences.
        </p>
      </div>

      {/* Profile Section */}

      <section className={styles.card}>
        <h2>Profile Information</h2>

        <div className={styles.formGrid}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              defaultValue="Abhi Chauhan"
            />
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              defaultValue="abhi@example.com"
            />
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="text"
              defaultValue="+91 9876543210"
            />
          </div>
        </div>

        <button className={styles.primaryBtn}>
          Save Changes
        </button>
      </section>

      {/* Notifications */}

      <section className={styles.card}>
        <h2>Notifications</h2>

        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" defaultChecked />
            Email Notifications
          </label>

          <label>
            <input type="checkbox" defaultChecked />
            Job Updates
          </label>

          <label>
            <input type="checkbox" defaultChecked />
            Invoice Alerts
          </label>
        </div>
      </section>

      {/* Security */}

      <section className={styles.card}>
        <h2>Security</h2>

        <div className={styles.formGrid}>
          <div>
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <button className={styles.primaryBtn}>
          Update Password
        </button>
      </section>
    </div>
  );
}

export default Settings;