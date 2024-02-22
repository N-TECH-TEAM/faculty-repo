// PaymentButton.js

import React from 'react';

const PaymentButton = ({ onClick }) => {
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      onClick={onClick}
    >
      Pay Now
    </button>
  );
}

export default PaymentButton;
