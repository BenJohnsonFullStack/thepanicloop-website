'use client';

import { useState } from 'react';
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function CookieConsentBanner() {
  const { setConsent, consentMade } = useCookieConsent();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  if (consentMade) return null; // Hide banner if any consent decision was made

  const handleConsent = (consent) => {
    setIsAnimatingOut(true); // Start the animation
    setTimeout(() => {
      setConsent(consent); // Call setConsent after the animation
    }, 250); // Adjust the time to match your animation duration (e.g., 500ms)
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-center z-50 shadow-lg transition-transform duration-300 ${
        isAnimatingOut ? 'animate-slide-down' : 'animate-slide-up'
      }`}
    >
      <p className="text-sm md:text-base mb-3 md:mb-0 md:mr-4 text-center md:text-left">
        We use cookies to improve your experience on our site. By continuing to use our site, you accept our use of cookies.
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => handleConsent('allowed')}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 md:px-4 md:py-2 rounded font-medium transition-all duration-150"
        >
          Allow
        </button>
        <button
          onClick={() => handleConsent('denied')}
          className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 md:px-4 md:py-2 rounded font-medium transition-all duration-150"
        >
          Not Allow
        </button>
      </div>
    </div>
  );
}
