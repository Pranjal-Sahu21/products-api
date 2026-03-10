import { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "How do I fetch products from the API?",
    answer:
      "You can fetch products via a simple GET request to `https://dummistore-wuga.onrender.com/products`. No authentication is required, and the API returns JSON data for instant development.",
  },
  {
    question: "Is the API free to use?",
    answer:
      "Yes! The DummiStore API is completely free for developers, designers, and testers. There are no hidden fees or rate limits.",
  },
  {
    question: "Can I filter or search products?",
    answer:
      "Yes. You can filter products by category or search by title, making it easier to find items.",
  },
  {
    question: "Do I need an API key?",
    answer:
      "No API key is required. The API is open for development, prototyping, and testing purposes.",
  },
  {
    question: "Is the API responsive and reliable?",
    answer:
      "Absolutely. The API is designed for fast and reliable responses, perfect for prototyping, testing, and building ecommerce apps.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 px-4 bg-black overflow-hidden bg-[radial-gradient(rgba(255,96,68,0.15)_1.5px,transparent_0)]
      bg-size-[20px_20px]
      bg-position-[-1px_-1px] border border-black  "
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl text-center">
          Got any questions about{" "}
          <span className="text-[#ff6044] italic">DummiStore</span>
        </h2>

        <p className="text-white/50 text-sm max-w-md mx-auto mt-4 mb-10 text-center">
          Check out some of the FAQs
        </p>

        {/* FAQ List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-neutral-800 rounded-2xl bg-neutral-900/50 backdrop-blur-md transition hover:border-[#ff6044]/40"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-white/90">{faq.question}</span>

                  <span
                    className={`transition-transform duration-300 text-[#ff6044] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-[#ff6044]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-white/60 text-sm">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
