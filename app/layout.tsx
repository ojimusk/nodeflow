import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NodeFlow | Validator as a Service",
  description: "Decentralized Protocol Validator-as-a-Service. Jalankan validator blockchain (Solana, dll) dengan mudah tanpa infrastruktur teknis yang rumit.",
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
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
