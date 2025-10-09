import bg from "../assets/bg.png";
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[20%] relative bg-black">
      <img
        src={bg}
        alt="background"
        className="absolute w-full h-full object-cover opacity-95 z-0"
      />
      <div className="flex justify-between items-center h-full px-10 relative z-10">
        <h1 className="bg-gradient-to-br from-[#030f0f] to-[#00df82] bg-clip-text text-transparent text-5xl font-bold">
          Vocord
        </h1>

        {/* Avatar + Logout */}
        <div className="relative group">
          {/* Whole clickable area including avatar and logout */}
          <div className="flex gap-2 flex-row-reverse items-end space-y-2 group">
            {/* Avatar button */}
            <div className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center cursor-pointer">
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </div>

            {/* Logout button — part of the same hoverable area */}
            <button
              onClick={() => navigate('/')}
              className="hidden group-hover:flex px-6 py-3 rounded-2xl backdrop-blur-md bg-[#ff0000]/40 border border-white/20 shadow-[0_0_15px_rgba(0,255,163,0.3)] text-white font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,163,0.7)]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
