import React from 'react';
import Background3D from './Background3D';

const Section = ({ title, children }) => (
  <section className="border border-white/10 rounded-xl p-6 bg-zinc-900/60">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="mt-3 text-white/80 space-y-3 text-sm leading-relaxed">{children}</div>
  </section>
);

const LegalPage = () => {
  return (
    <div className="relative min-h-screen py-24 bg-black text-white">
      <Background3D scene="https://prod.spline.design/minimal-pet-legal/scene.splinecode" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold">Legal</h1>
          <p className="text-white/70 mt-2">Transparent information about our company, privacy, and your rights.</p>
        </header>
        <Section title="Impressum (Legal Notice)">
          <p>Leovora GmbH · Tiergartenstrasse 5 · 10115 Berlin · Germany</p>
          <p>Managing Director: Alex Müller · VAT-ID: DE123456789</p>
          <p>Contact: hello@leovora.com · +49 30 1234 5678</p>
        </Section>
        <Section title="Privacy Policy">
          <p>We process personal data in accordance with GDPR Art. 6(1). Only the data necessary for order processing and customer service is stored. You may request access, correction, or deletion at any time.</p>
          <p>Analytics and cookies are minimized and used solely to ensure site functionality and performance. No data is sold to third parties.</p>
        </Section>
        <Section title="Terms & Conditions & Right of Withdrawal">
          <p>By ordering, you agree to our standard terms. Unless otherwise stated, delivery occurs within 2–5 business days within the EU.</p>
          <p>You have the right to withdraw from the contract within 14 days without giving any reason. To exercise the right, contact us in writing with your order number. Refunds are processed within 14 days after receiving the returned goods.</p>
        </Section>
      </div>
    </div>
  );
};

export default LegalPage;
