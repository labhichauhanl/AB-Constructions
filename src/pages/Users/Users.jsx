import styles from "./Users.module.css";

const users = [
  {
    id: 1,
    name: "Abhi Chauhan",
    role: "Customer",
    department: "Management",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Site Engineer",
    department: "Operations",
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Accountant",
    department: "Finance",
  },
  {
    id: 4,
    name: "Amit Verma",
    role: "Procurement",
    department: "Procurement",
  },
];

function CompanyUsers() {
  return (
    <div className={styles.companyPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Company & Users</h1>
          <p>
            Manage organization members and roles.
          </p>
        </div>

        <button className={styles.addButton}>
          + Add User
        </button>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search users..."
          className={styles.searchInput}
        />
      </div>

      <section className={styles.tableSection}>
        <table className={styles.usersTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.department}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.editButton}>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default CompanyUsers;