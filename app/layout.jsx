import localFont from "next/font/local";
import "./globals.css";
import { Header, CookieConsentBanner } from "@/components";
import { GoogleAnalytics } from "@next/third-parties/google"
import Cookies from "js-cookie";

const hackedFont = localFont({
  src: "./fonts/Hacked-KerX.ttf",
  variable: "--font-hacked",
  weight: "100 900"
});

export default function RootLayout({ children }) {

  const consentGiven = Cookies.get('cookie_consent') === 'allowed';

  return (
    <html lang="en">
      <body className={`${hackedFont.variable} antialiased`}>

        <Header />

        {children}

        <CookieConsentBanner />
      </body>

      {consentGiven && <GoogleAnalytics gaId={process.env.GA_TRACKING_ID} />}
    </html>
  );
}
