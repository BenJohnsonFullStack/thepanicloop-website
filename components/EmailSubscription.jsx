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
  
    setIsLoading(true);
  
    try {
      // Step 1: Add email to the database
      const dbResponse = await axios.post('/api/addSubscriber', { email });

      if (dbResponse.status === 201) {
        toast.success(dbResponse.data.message || 'Thanks for subscribing!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        try {
          // Step 2: Send the confirmation email
          const emailResponse = await axios.post('/api/sendEmail', { email });
          toast.info(emailResponse.data.message || 'Confirmation email sent.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } catch (emailError) {
          toast.warning(emailError.response?.data.message || 'Confirmation email could not be sent.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.error('Email send error:', emailError);
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.info(error.response.data.message || 'You are already subscribed!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(error.response?.data.message || 'Subscription failed. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error('Error:', error);
      }
    } finally {
      setIsLoading(false);
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
