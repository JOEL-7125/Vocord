import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { NavBar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useVoiceRecorder } from "../hooks/useVoiceRecorder";

export const Main = () => {
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
                <div className="p-5">
                  {expandedDate === date ? (
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        className="bg-white/10 text-white text-lg font-semibold p-2 rounded w-full mr-3"
                        value={recordings[0]?.cardTitle || date}
                        onChange={(e) =>
                          handleTitleChange(recordings[0].id, e.target.value, "cardTitle")
                        }
                      />
                      <button onClick={() => toggleExpand(date)}>
                        <i className="ri-arrow-up-s-line text-white text-2xl"></i>
                      </button>
                    </div>
                  ) : (
                    <div
                      className="flex justify-between items-center cursor-pointer hover:bg-white/5 transition-all duration-200"
                      onClick={() => toggleExpand(date)}
                    >
                      <h2 className="text-white text-lg font-semibold">
                        {recordings[0]?.cardTitle || date}
                      </h2>
                      <i className="ri-arrow-down-s-line text-white text-2xl"></i>
                    </div>
                  )}
                </div>

                {expandedDate === date && (
                  <div className="p-5 space-y-4">
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
                                className="bg-white/20 text-white text-lg font-semibold p-2 rounded"
                                value={rec.title}
                                onChange={(e) =>
                                  handleTitleChange(rec.id, e.target.value)
                                }
                              />
                              <button
                                className="text-green-400"
                                onClick={() => toggleEdit(rec.id)}
                              >
                                <i className="ri-save-line text-2xl"></i>
                              </button>
                            </div>
                          ) : (
                            <>
                              <h3 className="text-white font-semibold text-lg">
                                {rec.title}
                              </h3>
                              <audio
                                controls
                                src={rec.audioUrl}
                                className="w-64 mt-2"
                              />
                            </>
                          )}
                        </div>
                        <div className="flex gap-3 mt-2">
                          <button
                            className="text-blue-400"
                            onClick={() => toggleEdit(rec.id)}
                          >
                            <i className="ri-pencil-fill text-2xl"></i>
                          </button>
                          <button
                            className="text-red-400"
                            onClick={() => handleDelete(rec.id)}
                          >
                            <i className="ri-delete-bin-5-line text-2xl"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-5 bg-[#2a2a2a] p-4 rounded-full border-2">
            <button className="text-white">
              <i className="ri-keyboard-box-line text-2xl pl-3"></i>
            </button>

            <button className="flex items-center gap-4" onClick={handleMicClick}>
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

            <button className="text-white">
              <i className="ri-emoji-sticker-line text-2xl pr-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
