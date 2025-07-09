// src/components/Contact.jsx
export default function Contact() {
  return (
    <section className="py-16 bg-gray-100 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <p className="mb-4">📍 Nkwo Market Road, Ibagwa-Nike, Enugu</p>
      <p className="mb-4">📞 +234 810 000 0000</p>
      <a
        href="https://wa.me/2348100000000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
      >
        Message Us on WhatsApp
      </a>
    </section>
  );
}
