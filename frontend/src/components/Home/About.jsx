import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="bg-[#030f0f] py-24 px-4 text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center px-4 sm:px-8 my-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-br from-[#00df82] to-white bg-clip-text text-transparent mb-6"
        >
          About Vocord
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-20 h-1 mx-auto bg-[#00df82] rounded my-10 "
        ></motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed bg-white/5 p-14 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,255,130,0.15)]"
        >
          Vocord is your personal, private space where you can safely store your
          thoughts, feelings, and experiences. Speak your heart — the app will
          take care of the rest. Whether you're on the go or winding down, your
          stories stay with you — secure, simple, and only a tap away.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;