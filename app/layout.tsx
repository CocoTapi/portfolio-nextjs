import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "@/components/main-header/main-header";
import MainFooter from "@/components/main-footer/main-footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Shiori A",
  description: "Portfolio: Shiori Avino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <MainHeader />

        {children}
        <Analytics />

        {/* footer */}
        <MainFooter />
      </body>
    </html>
  );
}
