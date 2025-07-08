// src/components/WhyChooseUs.jsx
const reasons = [
  { title: "Reliable Service", emoji: "✅" },
  { title: "Affordable Pricing", emoji: "💸" },
  { title: "Experienced Staff", emoji: "🧑‍💻" },
  { title: "Fast Turnaround", emoji: "⚡" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="text-4xl mb-2">{reason.emoji}</div>
            <p className="text-lg font-medium">{reason.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
