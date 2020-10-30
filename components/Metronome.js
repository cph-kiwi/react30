import React, { useState, useEffect } from "react";

const Metronome = () => {
  const [bpm, setBpm] = useState(120);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const interval = (60 / bpm) * 1000;
    const audio = document.querySelector(`audio[data-key="metronomeSound"]`);
    const metronome = setInterval(() => {
      audio.currentTime = 0;
      audio.play();
    }, interval);
    return () => {
      clearInterval(metronome);
    };
  }, [bpm, playing]);

  return (
    <div className="metronome-container">
      <div className="metronome">
        <label className="metronome-label">Metronome:</label>
        <input
          className="metronome-input"
          id="bpm"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
        />
        <button
          className="metronome-button"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Stop" : "Play"}
        </button>

        <audio data-key="metronomeSound" src="/sounds/boom.wav"></audio>
      </div>

      <style jsx>{`
        .metronome-container {
          padding-top: 50px;
        }

        .metronome {
          display: flex;
          flex: 1;
          justify-content: center;
        }

        .metronome-label {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: #f2545b;
          padding-right: 20px;
        }

        .metronome-input {
          width: 6em;
        }
      `}</style>
    </div>
  );
};

export default Metronome;
