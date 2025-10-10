import bg from "../assets/bg.png";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/main");
    } catch (error) {
      console.error("Login Failed:", error);
      alert("Failed to sign in. Try again.");
    }
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center">
      <img
        src={bg}
        alt="background"
        className="absolute w-full h-full object-cover -z-10"
      />
      <div className="w-[90%] max-w-md bg-white/7 backdrop-blur-md rounded-3xl p-10 shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/20">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Welcome to Vocord
        </h2>
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-[#00df9a] to-[#00bcd4] text-black font-semibold py-3 rounded-xl shadow-[0_0_15px_rgba(0,255,163,0.3)] hover:shadow-[0_0_40px_rgba(0,255,163,0.7)] transition-all duration-300"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};
