import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white/40 backdrop-blur-md rounded-xl px-5 py-4 cursor-pointer transition-all duration-300 ease-in-out shadow-md"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{question}</h3>
        <span
          className={`text-2xl transform transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out text-black/80 text-base ${
          isOpen ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section className="bg-[#00df82] py-20 text-[#030f0f] text-center">
      <h2 className="text-5xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto px-6 text-left space-y-6">
        <FAQItem
          question="Is my data safe?"
          answer="Yes. Your recordings and data are securely stored and only accessible to you."
        />
        <FAQItem
          question="Do I need an account?"
          answer="Yes. Creating an account helps you access your diary across devices securely."
        />
        <FAQItem
          question="Is it free?"
          answer="Yes, Vocord is free to use."
        />
      </div>
    </section>
  );
};
