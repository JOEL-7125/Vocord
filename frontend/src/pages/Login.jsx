import React, { useState } from "react";
import bg from "../assets/bg.png";
import { useNavigate } from "react-router-dom";

export const Login = ({ handleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const success = handleLogin(username, password);
      if (success) {
        navigate("/main");
      } else {
        alert("Invalid credentials");
      }
    } else {
      // Dummy register logic
      console.log("Registered:", { username, email, password });
      alert("Registered successfully!");
      setIsLogin(true);
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
        <h1 className="text-4xl font-bold text-green-500 text-center mb-8">
          {isLogin ? "Login" : "Register"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 rounded-xl bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </>
          )}
          {isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-4 rounded-xl bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-xl bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="text-xl bg-gradient-to-br from-[#03624c] to-[#00df82] text-white py-3 rounded-full font-semibold hover:opacity-80 transition border-4"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
          
        <p className="text-white text-center mt-6">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-green-400 cursor-pointer font-semibold"
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-green-400 cursor-pointer font-semibold"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
