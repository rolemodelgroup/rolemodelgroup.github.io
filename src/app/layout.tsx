import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from 'clsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Role Model Group",
  description: "Where the Magic Happens",
};

const className = clsx(inter.className, "bg-teal-800");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={className}>{children}</body>
    </html>
  );
}
