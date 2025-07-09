// src/components/RegistrationModal.jsx
import nysc from '@/assets/images/nysc.jpg'
export default function RegistrationModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">NYSC Registration</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-red-500 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Flyer */}
          <div className="mb-5">
            <img
              src={nysc}
              alt="NYSC Flyer"
              className="rounded-2xl w-full object-cover shadow-sm"
            />
          </div>

          {/* Payment Info */}
          <div className="text-gray-700 space-y-3 mb-2">
            <div>
              <span className="font-semibold">Amount:</span> ₦2,000
            </div>
            <div>
              <span className="font-semibold">Account Name:</span> Visarc Business Center
            </div>
            <div>
              <span className="font-semibold">Bank:</span> Access Bank
            </div>
            <div>
              <span className="font-semibold">Account Number:</span> 1234567890
            </div>
            <div>
              After payment, send proof via WhatsApp to:{" "}
              <span className="font-semibold text-gray-900">+234 810 000 0000</span>
            </div>
          </div>

          {/* Pay Button */}
          <a
            href="https://paystack.com/pay/demo-payment"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition"
          >
            Pay with Paystack
          </a>
        </div>
      </div>
    </div>
  );
}
