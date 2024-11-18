'use client';

import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function GoogleAnalyticsLoader() {
  const { consentGiven } = useCookieConsent();

  return consentGiven ? <GoogleAnalytics gaId="G-4N0TCYGH0M" /> : null;
}
