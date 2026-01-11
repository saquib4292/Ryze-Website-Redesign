import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Assignment Heading */}
      <div style={{ padding: "30px 40px" }}>
        <h2 style={{ marginBottom: 10 }}>
          Product Website Redesign – Ryze
        </h2>
        <p style={{ color: "#666", marginBottom: 20 }}>
          Frontend Assignment – UI/UX, Routing & Responsive Design
        </p>
      </div>

      <Hero />
      <Features />
      <Footer />
    </>
  );
}