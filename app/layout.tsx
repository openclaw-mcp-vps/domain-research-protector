import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Research Protector – Research Domains Without Alerting Registrars",
  description: "Proxy service for domain research that prevents registrars from seeing your searches and buying domains you're interested in."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5ce2df83-eb53-4470-8764-2650c67b0afe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
