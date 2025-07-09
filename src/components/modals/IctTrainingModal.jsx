import { useEffect, useRef } from "react";
import coding from '@/assets/images/code.jpg'

export default function IctTrainingModal({ closeModal }) {
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-xl animate-fade-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">ICT Training Program</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-red-500 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Image */}
          <div className="mb-5">
            <img
              src={coding}
              alt="ICT Flyer"
              className="rounded-2xl w-full object-cover shadow-sm"
            />
          </div>

          {/* Training Info */}
          <div className="text-gray-700 space-y-3 mb-6 text-center">
            <p><strong>Course content:</strong> HTML, CSS, Javascript (Beginner-friendly)</p>
            <p><strong>Schedule:</strong> 3 Months (Thrice weekly, 2hrs per session)</p>
            <p><strong>Location:</strong> Visarc Business Center, Enugu</p>
            <p><strong>Fee:</strong> ₦105,000</p>
            <p><strong>Instalmental plan:</strong> Fees payable in 3 installments</p>
            <p>Call Ikenna for immediate enquiries on 0813 657 3235</p>
          </div>

          <a
            href="https://wa.me/2348100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition"
          >
            Register via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
