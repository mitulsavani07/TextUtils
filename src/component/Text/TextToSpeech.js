import React, { useState, useEffect } from "react";

const TextToSpeech = (props) => {
  const [text, setText] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance();
    u.text = text;
    const voices = synth.getVoices();
    if (voices.length > 0) {
      setVoice(voices[0]);
      u.voice = voices[0];
    }
    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPaused(false);
  };

  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value));
    utterance.voice = voices.find((v) => v.name === event.target.value);
  };

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
    utterance.pitch = parseFloat(event.target.value);
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
    utterance.rate = parseFloat(event.target.value);
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
    utterance.volume = parseFloat(event.target.value);
  };

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-5'>{props.heading}</h1>
      <div className="flex justify-center">
        <textarea
          rows="5"
          placeholder="Enter text"
          className="border-gray-400 px-4 py-2 w-full rounded-lg mr-4 drop-shadow-primary dark:drop-shadow-none"
          value={text}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mt-10 mb-8 flex-wrap">
      <label className="flex items-center">
        Pitch:
        <input
          className="ml-3"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={pitch}
          onChange={handlePitchChange}
        />
      </label>
      <label className="flex items-center">
        Speed:
        <input
          className="ml-3"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={handleRateChange}
        />
      </label>
      <label className="flex items-center">
        Volume:
        <input
          className="ml-3"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>
      </div>
      <div className="flex items-center justify-center md:justify-between flex-wrap">
        <label className="text-center">
          Voice:
          <select
            value={voice?.name}
            onChange={handleVoiceChange}
            className="ml-3 p-3 rounded-md bg-primary text-white"
          >
            {window.speechSynthesis.getVoices().map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-center flex-wrap">
          <button className="btn" onClick={handlePlay}>
            {isPaused ? "Resume" : "Play"}
          </button>
          <button className="btn" onClick={handlePause}>
            Pause
          </button>
          <button className="btn" onClick={handleStop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;