import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white/40 backdrop-blur-md rounded-xl px-5 py-4 cursor-pointer shadow-md"
    >
      <motion.div layout className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{question}</h3>
        <motion.span
          className="text-2xl"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden text-black/80 text-base"
          >
            <p className="pt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
