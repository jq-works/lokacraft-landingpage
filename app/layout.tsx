import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokacraft | Melestarikan Budaya Melalui Kriya Fungsional",
  description: "Lokacraft menghadirkan produk kriya fungsional premium (sarung galon) yang mengangkat keindahan budaya lokal Wayang Beber dan Cerita Panji ke dalam kehidupan sehari-hari.",
  keywords: ["lokacraft", "kriya", "budaya lokal", "wayang beber", "cerita panji", "sarung galon", "kerajinan tangan", "indonesia"],
  authors: [{ name: "Lokacraft Indonesia" }],
  openGraph: {
    title: "Lokacraft | Melestarikan Budaya Melalui Kriya Fungsional",
    description: "Produk kriya fungsional premium dengan sentuhan budaya lokal Indonesia.",
    type: "website",
    locale: "id_ID",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="bg-loka-cream text-loka-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}
