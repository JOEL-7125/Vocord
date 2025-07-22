import React from "react";

const SideBar = ({ dates, selectedDate, onDateSelect }) => {
  return (
    <div className="w-[18%] p-4 space-y-6">
      {dates.map((date, index) => (
        <div key={index}>
          <h2 className="text-white text-lg mb-2">{date}</h2>
          <button
            onClick={() => onDateSelect(date)}
            className={`w-full p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white outline-none shadow-[0_0_10px_rgba(255,255,255,0.1)] 
              ${selectedDate === date ? "border-2 border-green-400" : ""}`}
          >
            {date}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
