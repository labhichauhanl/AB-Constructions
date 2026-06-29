import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    alert("Account created successfully");

    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.overlay}>
          <h1>ABC Builders</h1>

          <h2>
            Join Our
            <br />
            Platform
          </h2>

          <p>
            Create an account and start managing
            construction projects efficiently.
          </p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.loginCard}>
          <h2>Create Account</h2>
          <p>Register to continue</p>

          <form
            onSubmit={handleSignup}
            className={styles.form}
          >
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              margin="dense"
            />

            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              margin="dense"
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="dense"
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="text"
              value={formData.password}
              onChange={handleChange}
              margin="dense"
            />

            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="text"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="dense"
            />

            <button
              type="submit"
              className={styles.loginButton}
            >
              Create Account
            </button>

            <p className={styles.signupText}>
              Already have an account?{" "}
              <Link to="/login">
                Login
              </Link>
            </p>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;