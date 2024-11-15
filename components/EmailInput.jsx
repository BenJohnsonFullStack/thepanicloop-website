export default function EmailInput({ className, email, setEmail }) {

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <input
      type="email"
      value={email}
      onChange={handleInputChange}
      placeholder="Enter your email"
      className={`p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      required
    />
  );
}
