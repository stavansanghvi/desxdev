import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles.css"
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DesXDev",
  description:
    "Delivering App Development, Web Development, UI/UX, Logo and Branding and Digital Marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
