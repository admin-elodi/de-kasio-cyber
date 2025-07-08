// src/components/Hero.jsx
import { useState } from "react";
import RegistrationModal from "./modals/RegistrationModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-white to-gray-100 relative">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">De-Kasio Cybercafe</h1>
      <p className="text-lg md:text-xl mb-8 text-gray-600">
        Your Digital Gateway to JAMB, WAEC, NYSC, CAC & More
      </p>
      <div className="flex flex-col md:flex-row gap-4 z-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition-all font-medium"
        >
          Ongoing Registrations
        </button>
        <button className="border border-accent text-accent px-6 py-3 rounded-xl hover:bg-sky-50 transition-all font-medium">
          Upcoming Registrations
        </button>
      </div>

      {isModalOpen && (
        <RegistrationModal closeModal={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}
