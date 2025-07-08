import { useState } from "react";
import IctTrainingModal from "@/components/modals/IctTrainingModal";

const services = [
  {
    label: "Online Registrations (WAEC, NIN, etc.)",
    active: false,
  },
  {
    label: "Typing & Printing",
    active: false,
  },
  {
    label: "Photocopying & Scanning",
    active: false,
  },
  {
    label: "Passport Photography",
    active: false,
  },
  {
    label: "Web browing services",
    active: false,
  },
  {
    label: "Learn coding (HTML, CSS, Javascript)",
    active: true,
    onClickType: "ict",
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const handleServiceClick = (service) => {
    if (service.onClickType === "ict") {
      setActiveModal("ict");
    }
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center relative">
      <h2 className="text-3xl font-semibold mb-8">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          const isActive = service.active;
          const baseStyles =
            "w-full p-4 rounded-xl shadow-sm font-semibold transition";

          // ✅ Use static classes only
          const activeStyle = "bg-blue-100 text-blue-800 hover:shadow-md cursor-pointer";
          const inactiveStyle = "bg-yellow-100 text-gray-700 cursor-default";

          const finalStyle = isActive ? activeStyle : inactiveStyle;

          return (
            <button
              key={idx}
              onClick={isActive ? () => handleServiceClick(service) : undefined}
              className={`${baseStyles} ${finalStyle}`}
              disabled={!isActive}
            >
              {service.label}
            </button>
          );
        })}
      </div>

      {/* Conditionally render the ICT modal */}
      {activeModal === "ict" && (
        <IctTrainingModal closeModal={() => setActiveModal(null)} />
      )}
    </section>
  );
}
