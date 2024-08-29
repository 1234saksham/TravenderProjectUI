// pages/confirmation.js

import { useRouter } from 'next/router';

const Confirmation = () => {
  const router = useRouter();

  const handlePayment = () => {
    // Simulate payment success and redirect
    alert("Payment Successful!");
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-xl text-black font-semibold mb-4">Confirm Your Booking</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-bold">Trip Details</h2>
        <p className="text-sm text-gray-500 mt-2">Trip Price per person: ₹189.25</p>
        <p className="text-sm text-gray-500">Total persons: 3</p>
        <p className="text-sm text-gray-500">Total Price: ₹567.75</p>
        
        <button
          className="mt-6 w-full bg-green-500 text-white py-2 rounded-md shadow"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
