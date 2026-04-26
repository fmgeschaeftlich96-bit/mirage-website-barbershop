import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MiRash Barbershop – Classic Haircut & Classic Shave",
  description:
    "Premium Barbershop in Neuruppin & Oranienburg. Klassische Haarschnitte, Rasuren und Bartpflege. Einfach vorbeikommen – kein Termin nötig.",
  keywords: [
    "Barbershop",
    "Haarschnitt",
    "Neuruppin",
    "Oranienburg",
    "MiRash",
    "Rasur",
    "Barber",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
