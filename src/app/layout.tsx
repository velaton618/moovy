import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.sass";
import s from './layout.module.sass';
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moovy",
  icons: '/favicon.ico',
  description: "Online cinema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${s.container}`}>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
