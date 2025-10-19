import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ParallaxBackground from "@/components/layout/ParallaxBackground";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SS Pineto - Elegance Edition",
  description: "Giovani, Veloci, Uniti",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans text-[color:var(--color-bianco)] bg-[color:var(--color-nero)] antialiased">
        <ParallaxBackground />
        <Header />
        <main className="pt-[var(--header-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
