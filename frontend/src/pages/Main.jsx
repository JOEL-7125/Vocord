import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { NavBar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useVoiceRecorder } from "../hooks/useVoiceRecorder";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const {
    isRecording,
    recordingsByDate,
    selectedDate,
    dates,
    handleMicClick,
    handleDelete,
    handleTitleChange,
    toggleEdit,
    handleDateSelect,
  } = useVoiceRecorder();

  const [expandedDate, setExpandedDate] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  const toggleExpand = (date) => {
    setExpandedDate(expandedDate === date ? null : date);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <NavBar />

      <div className="flex flex-1 bg-[#212121]">
        <SideBar
          dates={dates}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />

        <div className="flex-1 p-5 flex flex-col justify-between overflow-hidden">
          <div className="flex-1 bg-[#2a2a2a] rounded-xl p-5 overflow-y-auto">
            {Object.entries(recordingsByDate).map(([date, recordings]) => (
              <div
                key={date}
                className="bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-2xl mb-6 transition-all max-w-[450px] w-full"
              >
                <div
                  className="cursor-pointer px-5 py-3 flex justify-between items-center hover:bg-white/5 transition-all duration-200"
                  onClick={() => toggleExpand(date)}
                >
                  <p className="text-white text-sm font-medium">{date}</p>
                  <i
                    className={`ri-arrow-down-s-line text-white text-xl transition-transform ${
                      expandedDate === date ? "rotate-180" : ""
                    }`}
                  ></i>
                </div>

                {expandedDate === date && (
                  <div className="px-5 pb-5 space-y-4">
                    {recordings.map((rec) => (
                      <div
                        key={rec.id}
                        className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-start flex-wrap"
                      >
                        <div className="flex flex-col">
                          {rec.isEditing ? (
                            <div className="flex items-center gap-3">
                              <input
                                type="text"
                                className="bg-white/20 text-white text-sm font-semibold p-2 rounded"
                                value={rec.title}
                                onChange={(e) =>
                                  handleTitleChange(rec.id, e.target.value)
                                }
                              />
                              <button
                                className="text-green-400"
                                onClick={() => toggleEdit(rec.id)}
                              >
                                <i className="ri-save-line text-xl"></i>
                              </button>
                            </div>
                          ) : (
                            <>
                              <p className="text-white text-sm font-medium mb-1">
                                {rec.title}
                              </p>
                              <audio
                                controls
                                src={rec.audioUrl}
                                className="w-64"
                              />
                            </>
                          )}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button
                            className="text-blue-400"
                            onClick={() => toggleEdit(rec.id)}
                          >
                            <i className="ri-pencil-fill text-xl"></i>
                          </button>
                          <button
                            className="text-red-400"
                            onClick={() => handleDelete(rec.id)}
                          >
                            <i className="ri-delete-bin-5-line text-xl"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-5 bg-[#2a2a2a] p-4 rounded-full border-2">
            

            <button
              className="flex items-center gap-4"
              onClick={handleMicClick}
            >
              <i
                className={`ri-mic-line text-3xl ${
                  isRecording ? "text-green-400" : "text-white"
                } transition-all duration-300`}
              ></i>
              {isRecording && (
                <span className="text-white font-semibold text-lg animate-pulse">
                  Recording...
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
