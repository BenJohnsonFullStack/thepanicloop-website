'use client'

import { useState } from 'react';
import axios from 'axios';
import { EmailInput, SubscribeButton, Spinner } from '.';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email || !isValidEmail(email)) {
        toast.error('Please enter a valid email address', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
      return;
    }

    setIsLoading(true); // Start the loading state

    try {
      const response = await axios.post('/api/sendEmail', {email: email});

      if (response.status === 201) {
        setEmail("")
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error('Subscription failed. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error('Error:', error);
    } finally {
        setIsLoading(false); // End the loading state
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center mb-10 w-full px-2 sm:w-1/4`}>
        {/* Email Input */}
        <EmailInput
            className="flex-1 mb-2 sm:mb-0 sm:mr-2 text-black w-full"
            email={email}
            setEmail={setEmail}
        />

        {/* Show the spinner if loading, otherwise show the button */}
        {isLoading ? (
            <div className="w-full sm:w-auto px-4 py-2 flex justify-center">
                <Spinner className="w-6 h-6" />
            </div>
        ) : (
            <SubscribeButton
            onClick={handleSubscribe}
            className="w-full sm:w-auto"
            />
        )}

        {/* Toast Container */}
        <ToastContainer />
    </div>
  );
}
