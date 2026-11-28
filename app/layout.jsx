// app/layout.jsx
// The "frame" around EVERY page: font, page title, animated background,
// header (menu), footer and the scroll animation. Each page file
// (page.jsx) is dropped into {children} below.
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import NeuralBackground from "@/components/NeuralBackground";
import { site } from "@/lib/data";

const font = Manrope({ subsets: ["latin"], variable: "--font" });

export const metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <NeuralBackground />
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
