'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create the context
const CookieConsentContext = createContext();

// Create the provider component
export function CookieConsentProvider({ children }) {
  const [consentGiven, setConsentGiven] = useState(false);
  const [consentMade, setConsentMade] = useState(true); // New state to track if any consent was made

  // Check the cookie consent state when the component mounts
  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    console.log("A cookie for consent_given is found: ", consent)
    if (!consent) {
        setConsentMade(false)
    }
    setConsentGiven(consent === 'allowed'); // Only set to true if consent is 'allowed'
  }, []);

  // Function to set the consent state and save it to cookies
  const setConsent = (consent) => {
    Cookies.set('cookie_consent', consent, {
      expires: 365, // Store consent for 1 year
      sameSite: 'Lax', // Cookie only sent on same-site requests
      secure: true, // Only sent over HTTPS
    });
    setConsentGiven(consent === 'allowed'); // Set to true only if consent is 'allowed'
    setConsentMade(true); // Set to true when any consent decision is made
  };

  return (
    <CookieConsentContext.Provider value={{ consentGiven, setConsent, consentMade }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

// Custom hook to use the CookieConsentContext
export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
