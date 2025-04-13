import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/img/theme/pic2.jpg"; // Adjust the path based on your folder structure

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to DyslexiLearn</h1>
      <p style={styles.subheading}>Empowering learning for everyone.</p>
      <button style={styles.button} onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "#fff", // Adjust text color for better visibility
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: '#FFFFFF',
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#5e72e4",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Home;
