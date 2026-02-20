import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sanika Surose",
  description: "Software engineering portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
