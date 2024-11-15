'use client'

export default function SubscribeButton({ onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${className}`}
    >
      Subscribe
    </button>
  );
}
