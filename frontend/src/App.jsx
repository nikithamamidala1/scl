import React from "react";

// Navbar Component
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>School Logo</h2>
      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>About</li>
        <li>Admissions</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 School Name. All rights reserved.</p>
    </footer>
  );
};

// HeroSection Component
const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <h1>Welcome to Our School</h1>
      <p>Providing quality education since 1990.</p>
      <button style={styles.button}>Learn More</button>
    </section>
  );
};

// Card Component
const Card = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div style={styles.cardContainer}>
        <Card title="Our Teachers" description="Meet our dedicated teaching staff." />
        <Card title="Student Life" description="Explore activities and events." />
        <Card title="Admissions" description="Join our school community." />
      </div>
      <Footer />
    </div>
  );
};

// Simple inline styles (you can replace with CSS or styled-components)
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#004080",
    color: "white",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "1rem",
    cursor: "pointer",
  },
  hero: {
    padding: "4rem 2rem",
    textAlign: "center",
    backgroundColor: "#cce6ff",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    marginTop: "1rem",
    cursor: "pointer",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem 2rem",
    width: "250px",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  footer: {
    padding: "1rem 2rem",
    textAlign: "center",
    backgroundColor: "#004080",
    color: "white",
    marginTop: "2rem",
  },
};

export default App;
