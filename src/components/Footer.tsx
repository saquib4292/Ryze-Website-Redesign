export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>© 2026 Ryze. All rights reserved.</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      padding: "20px",
      textAlign: "center" as const,
      borderTop: "1px solid #eee",
      marginTop: "40px",
    },
  };
  