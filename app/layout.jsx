import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components";
import { GoogleAnalytics } from "@next/third-parties/google"

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

      <GoogleAnalytics gaId={process.env.GA_TRACKING_ID} />
    </html>
  );
}
