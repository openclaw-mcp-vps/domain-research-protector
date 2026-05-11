export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Privacy Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Research Domains Without<br />
          <span className="text-[#58a6ff]">Alerting Registrars</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Registrars track your domain searches and snatch names you're interested in.
          Our rotating-proxy service keeps your research private — so you find the domain before they do.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Protecting Your Research — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          {[
            ["Rotating IPs", "Each lookup uses a fresh IP address"],
            ["Randomized Agents", "Spoofed user-agents on every request"],
            ["Bulk Checks", "Upload hundreds of domains at once"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-1">{title}</p>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited domain lookups",
              "Rotating residential IPs",
              "Randomized user-agent headers",
              "Bulk CSV upload & export",
              "Availability history dashboard",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            [
              "Do registrars really track domain searches?",
              "Yes. Many registrars log search queries tied to your IP and browser fingerprint. There are documented cases of domains being registered shortly after users searched for them. Our proxy layer breaks that link."
            ],
            [
              "How does the rotating proxy work?",
              "Every domain availability check is routed through a different residential IP address with a randomized user-agent string, making it impossible for registrars to correlate your searches into a pattern."
            ],
            [
              "Can I check domains in bulk?",
              "Absolutely. Upload a CSV of up to 500 domains per batch. Results are returned in minutes and can be exported back to CSV with availability status and timestamps."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pt-8 border-t border-[#30363d]">
        &copy; {new Date().getFullYear()} Domain Research Protector. All rights reserved.
      </footer>
    </main>
  );
}
