import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <h1>
          AI-Powered Replies for <span className="highlight">Google Reviews</span>
        </h1>
        <p className="subtitle">
          Save time and boost your reputation. Let AI craft smart, professional
          responses to every customer review.
        </p>
        <button className="cta-btn">Get Early Access 🚀</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          ⭐
          <h3>Boost Reputation</h3>
          <p>Respond quickly to every review and build customer trust.</p>
        </div>
        <div className="feature-card">
          💬
          <h3>Save Time</h3>
          <p>AI crafts replies instantly—no more manual writing.</p>
        </div>
        <div className="feature-card">
          ✨
          <h3>Sound Human</h3>
          <p>Natural, personalized responses your customers will love.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Turn Reviews into Opportunities</h2>
        <p>
          Start replying smarter today. Sign up for our beta and see AI in
          action.
        </p>
        <button className="cta-btn secondary">Join the Beta 🎉</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} ReviewAI. All rights reserved.
      </footer>
    </div>
  );
}
