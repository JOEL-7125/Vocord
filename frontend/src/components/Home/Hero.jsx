import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#030f0f] py-24 px-4 text-white">
  <div className="max-w-5xl mx-auto text-center px-4 sm:px-8 my-20">
    <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-br from-[#00df82] to-white bg-clip-text text-transparent mb-6">
      About Vocal Diary
    </h2>
    
    <div className="w-20 h-1 mx-auto bg-[#00df82] rounded my-10 "></div>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed bg-white/5 p-14 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,255,130,0.15)]">
      Vocal Diary is your personal, private space where you can safely store your thoughts, feelings, and experiences. 
      Speak your heart — the app will take care of the rest. 
      Whether you're on the go or winding down, your stories stay with you — secure, simple, and only a tap away.
    </p>
  </div>
</section>

  )
}

export default Hero