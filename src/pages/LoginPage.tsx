import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import "./LoginPage.css"; // Import the CSS file for styling
import "../HomePageDark.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    // Simulate login process (replace with your actual authentication logic)
    try {
      // Replace this with your actual API call
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Login failed.');
      // }

      // const data = await response.json();
      // Handle successful login (e.g., store token, redirect)
      // console.log('Login successful:', data);
      // localStorage.setItem('token', data.token); // Example: Store token
      // navigate('/dashboard'); // Redirect to dashboard

      // Simulate a successful login for the demo
      setTimeout(() => {
        if (email === "test@example.com" && password === "password") {
          // Simulate storing a token
          localStorage.setItem("token", "mock-token");
          navigate("/profile"); // Redirect to profile
          setLoading(false);
        } else {
          setError("Invalid credentials. Please try again.");
          setLoading(false);
        }
      }, 1500); // Simulate network delay
    } catch (err: unknown) {
      let errorMessage = "An error occurred during login.";
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "string") {
        errorMessage = err;
      }
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="home-page-dark">
      <NavBar />
      <div className="login-page">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
