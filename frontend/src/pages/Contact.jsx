import React from 'react'
import bg from "../assets/bg.png";


const Contact = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center">

         <img
            src={bg}
            alt="background"
            className="absolute w-full h-full object-cover -z-10"
          />


        <div className="w-full max-w-[45%] bg-white/7 backdrop-blur-md rounded-3xl p-10 shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/20">

            <form className="flex flex-col gap-6">
            <>

        <h1 className="text-4xl font-bold text-green-500 text-center mb-8">
            Contact Us
        </h1>

              <input
                type="text"
                placeholder="Your name"
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </>
            <textarea 
            className="p-4 rounded-xl bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-400 h-40"
             name="text" id="" placeholder='Description'>
            
            </textarea>
          <button
            type="submit"
            className="text-xl bg-gradient-to-br from-[#03624c] to-[#00df82] text-white py-3 rounded-full font-semibold hover:opacity-80 transition border-2"
          >
            Submit
          </button>
        </form>

        </div>
        
    </div>
  )
}

export default Contact