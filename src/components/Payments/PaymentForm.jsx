import React from 'react';
import PaymentButton from './PaymentButton';

const PaymentForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-8 rounded">
      <h2 className="text-2xl text-center font-semibold mb-4">Payment Information<hr className='w-48 h-1 mb-6 mx-auto my-4 bg-orange-400 border-0 rounded-md md:my-10'></hr></h2>
      {/* User Information Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">User Information</h3>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
      </div>
      {/* Billing Details Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
        <input
          type="text"
          placeholder="Address"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
      </div>
      {/* Payment Method Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="MM / YY"
            className="border rounded-md py-2 px-3"
          />
          <input
            type="text"
            placeholder="CVV"
            className="border rounded-md py-2 px-3"
          />
        </div>
      </div>
      {/* Submit Button */}
      <PaymentButton />
    </div>
  );
}

export default PaymentForm;
