import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I sign up?",
    answer: "You can sign up by clicking the 'Sign Up' button on the homepage.",
  },
  {
    id: 2,
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
  // Add more real FAQs here
];

const FAQAccordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4">
            <button
              className="w-full text-left p-4 bg-gray-100 font-bold rounded-md"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
            </button>
            {activeId === faq.id && (
              <p className="p-4 bg-gray-200 rounded-md">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
