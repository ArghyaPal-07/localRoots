import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Compass, Hotel, UserCircle, Shield, Menu } from "lucide-react";
import { DemoSwitcher } from "@/components/DemoSwitcher";

export const metadata: Metadata = {
  title: "LocalRoots - From tourists to temporary locals",
  description: "Experience the city like a local with verified university students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col relative">
        {children}
        <DemoSwitcher />
      </body>
    </html>
  );
}
