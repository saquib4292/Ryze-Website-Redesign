export default function Features() {
    return (
      <section style={styles.section}>
        <h2>Why Ryze?</h2>
  
        <div style={styles.grid}>
          <div>AI-Driven Insights</div>
          <div>Workflow Automation</div>
          <div>Real-Time Analytics</div>
        </div>
      </section>
    );
  }
  
  const styles = {
    section: {
      padding: "60px 20px",
      textAlign: "center" as const,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      marginTop: "30px",
    },
  };