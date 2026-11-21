import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
