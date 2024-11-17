import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components";

const hackedFont = localFont({
  src: "./fonts/Hacked-KerX.ttf",
  variable: "--font-hacked",
  weight: "100 900"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hackedFont.variable} antialiased`}>

        <Header />

        {children}
      </body>
    </html>
  );
}
