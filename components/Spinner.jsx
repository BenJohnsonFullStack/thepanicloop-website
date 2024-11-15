'use client';

export default function Spinner({ className }) {
  return (
    <div className={`animate-spin flex justify-center rounded-full border-4 border-t-4 border-gray-200 border-t-indigo-600 h-6 w-6 ${className}`}></div>
  );
}
