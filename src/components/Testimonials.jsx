// src/components/Testimonials.jsx
const testimonials = [
  {
    name: "Aisha B.",
    quote: "Visarc helped me register for JAMB with ease. Fast and friendly service!",
  },
  {
    name: "Chuka E.",
    quote: "Their printing and passport photo service is top-notch. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
          >
            <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
            <p className="font-semibold text-gray-900">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
