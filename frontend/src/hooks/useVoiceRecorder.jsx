import { useState, useRef } from "react";

export const useVoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingsByDate, setRecordingsByDate] = useState({});
  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  function getTodayDate() {
    return new Date().toLocaleDateString("en-GB");
  }

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
      audioChunks.current.push(event.data);
    });

    mediaRecorderRef.current.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const dateKey = getTodayDate();

      const newRecording = {
        id: Date.now(),
        title: `Recording ${(recordingsByDate[dateKey]?.length || 0) + 1}`,
        audioUrl: audioUrl,
        isEditing: false,
      };

      setRecordingsByDate((prev) => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), newRecording],
      }));

      audioChunks.current = [];
    });

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleMicClick = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const handleDelete = (id) => {
    setRecordingsByDate((prev) => ({
      ...prev,
      [selectedDate]: prev[selectedDate].filter((rec) => rec.id !== id),
    }));
  };

  const handleTitleChange = (id, newTitle) => {
    setRecordingsByDate((prev) => ({
      ...prev,
      [selectedDate]: prev[selectedDate].map((rec) =>
        rec.id === id ? { ...rec, title: newTitle } : rec
      ),
    }));
  };

  const toggleEdit = (id) => {
    setRecordingsByDate((prev) => ({
      ...prev,
      [selectedDate]: prev[selectedDate].map((rec) =>
        rec.id === id ? { ...rec, isEditing: !rec.isEditing } : rec
      ),
    }));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const dates = Object.keys(recordingsByDate);

  return {
    isRecording,
    recordingsByDate,
    selectedDate,
    dates,
    handleMicClick,
    handleDelete,
    handleTitleChange,
    toggleEdit,
    handleDateSelect,
  };
};
