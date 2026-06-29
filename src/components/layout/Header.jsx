import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./Header.module.css";

function Header({ collapsed, setCollapsed }) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button 
        className={styles.menuBtn}
        onClick={() => setCollapsed(!collapsed)}
        >
          <MenuIcon />
        </button>

        <div className={styles.searchContainer}>
          <SearchIcon className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search projects, jobs, invoices..."
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.notificationWrapper}>
          <NotificationsNoneIcon />

          <span className={styles.notificationBadge}>3</span>
        </div>

        <div className={styles.profile}>
          <div className={styles.avatar}>AB</div>

          <div className={styles.userInfo}>
            <h4>Abhi Chauhan</h4>
            <h6>Customer</h6>
          </div>

          <KeyboardArrowDownIcon className={styles.arrowIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;