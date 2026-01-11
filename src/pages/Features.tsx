export default function Features() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Features</h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Powerful AI-driven tools to accelerate your sales pipeline.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>AI Insights</h3>
          <p>Understand customer intent with real-time AI analytics.</p>
        </div>

        <div style={cardStyle}>
          <h3>Workflow Automation</h3>
          <p>Automate repetitive sales tasks and save time.</p>
        </div>

        <div style={cardStyle}>
          <h3>Performance Tracking</h3>
          <p>Track deals, conversions, and revenue in one place.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "6px",
};