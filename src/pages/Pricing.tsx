export default function Pricing() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Pricing</h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Simple pricing plans for teams of all sizes.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Starter</h3>
          <p>₹0 / month</p>
          <button>Get Started</button>
        </div>

        <div style={cardStyle}>
          <h3>Pro</h3>
          <p>₹1999 / month</p>
          <button>Get Started</button>
        </div>

        <div style={cardStyle}>
          <h3>Enterprise</h3>
          <p>Custom pricing</p>
          <button>Contact Sales</button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "6px",
  textAlign: "center" as const,
};