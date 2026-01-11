export default function Hero() {
    return (
      <section style={styles.hero}>
        <h1>AI-Powered Sales Enablement Platform</h1>
        <p>
          Ryze helps revenue teams automate workflows, gain insights,
          and close deals faster using AI.
        </p>
  
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button style={styles.primary}>Get Started</button>
          <button style={styles.secondary}>Book a Demo</button>
        </div>
      </section>
    );
  }
  
  const styles = {
    hero: {
      padding: "80px 20px",
      textAlign: "center" as const,
    },
    actions: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      gap: "15px",
    },
    primary: {
      padding: "10px 18px",
      background: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
    },
    secondary: {
      padding: "10px 18px",
      border: "1px solid #000",
      background: "transparent",
      borderRadius: "4px",
    },
  };