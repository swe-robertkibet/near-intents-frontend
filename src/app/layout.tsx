import type { Metadata } from "next";
import "./globals.css";
import { WalletProvider } from "@/contexts/WalletContext";

export const metadata: Metadata = {
  title: "NEAR Intents Portal",
  description: "Bridge assets seamlessly across chains with NEAR Intents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
