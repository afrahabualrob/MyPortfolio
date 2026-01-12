import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

export const metadata: Metadata = {
  title: "Afrah Portfolio",
  description: "This is my portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
