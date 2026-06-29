import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      formData.email === "customer@abcbuilders.com" &&
      formData.password === "123456"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.overlay}>
          <h1>ABC Builders</h1>

          <h2>
            Building Tomorrow's
            <br />
            Infrastructure
          </h2>

          <p>
            Manage projects, quotations, jobs,
            invoices and reports from one platform.
          </p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.loginCard}>
          <h2>Welcome Back</h2>
          <p>Sign in to continue</p>

          <div className={styles.demoCredentials}>
            <h4>Demo Login</h4>
            <p>Email: customer@abcbuilders.com</p>
            <p>Password: 123456</p>
          </div>

          <form
            onSubmit={handleLogin}
            className={styles.form}
          >
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Remember Me"
            />

            <button
              type="submit"
              className={styles.loginButton}
            >
              Login
            </button>
            <p className={styles.signupText}>
              Don't have an account?{" "}
              <Link to="/signup">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;