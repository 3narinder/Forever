import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOREVER",
  description: "Website for best Women clothings online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
