import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NodeFlow | Validator as a Service",
  description: "Run and manage blockchain validators effortlessly. One-click deployment, real-time monitoring, and automated failover for Solana and other networks.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}
