import React from "react";
import bg from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import { LazyMotion, domAnimation, motion } from "motion/react";
import Hero from "../components/Home/Hero";
import { FAQ } from "../components/Home/FAQ";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <LazyMotion features={domAnimation}>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="h-screen flex flex-col items-center justify-center relative px-4"
        >
          <img
            src={bg}
            alt=""
            className="object-cover h-screen w-full absolute -z-10"
          />

          <h1 className="text-6xl sm:text-[8rem] md:text-[10rem]/none font-semibold bg-gradient-to-br from-[#030f0f] to-[#00df82] bg-clip-text text-transparent text-center leading-tight stroke-text">
            Vocal
            <br />
            <span className="pl-0 sm:pl-24">Diary</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 text-white font-semibold text-center px-4">
            A secret place to store your stories...
          </h2>

          <button
            onClick={() => navigate("/login")}
            className="group mt-5 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl text-white border border-white/30 bg-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white/20 transition relative overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>
          </button>

          <div className="absolute bottom-6 sm:bottom-10 animate-bounce">
            <svg
              className="w-8 sm:w-12 h-8 sm:h-12 text-white mx-auto"
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
          </div>
        </motion.div>
      </LazyMotion>

      <Hero />

      <FAQ/>

      <section className="bg-[#030f0f] py-20 px-4 sm:px-8 text-white text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Contact Us</h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-4">
          Have any questions or feedback? We'd love to hear from you.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="group mt-5 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl text-white border border-white/30 bg-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white/20 transition relative overflow-hidden"
        >
          <span className="relative z-10">Contact Me</span>
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>
        </button>
      </section>
    </div>
  );
};
