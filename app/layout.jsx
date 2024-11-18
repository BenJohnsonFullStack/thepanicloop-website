import localFont from "next/font/local";
import "./globals.css";
import { Header, CookieConsentBanner } from "@/components";
import { CookieConsentProvider } from "@/contexts";
import GoogleAnalyticsLoader from '@/components/GoogleAnalyticsLoader';

const hackedFont = localFont({
  src: "./fonts/Hacked-KerX.ttf",
  variable: "--font-hacked",
  weight: "100 900"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <CookieConsentProvider>
          <GoogleAnalyticsLoader />
          <body className={`${hackedFont.variable} antialiased`}>
            {/* Wrap the app with the context provider */}
              <Header />
              {children}
              <CookieConsentBanner />
          </body>
        </CookieConsentProvider>
    </html>
  );
}
