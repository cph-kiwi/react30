import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

const letters = [
  { letter: "A", sound: "clap", keyCode: 65 },
  { letter: "S", sound: "hihat", keyCode: 83 },
  { letter: "D", sound: "kick", keyCode: 68 },
  { letter: "F", sound: "openhat", keyCode: 70 },
  { letter: "G", sound: "boom", keyCode: 71 },
  { letter: "H", sound: "ride", keyCode: 72 },
  { letter: "J", sound: "snare", keyCode: 74 },
  { letter: "K", sound: "tom", keyCode: 75 },
  { letter: "L", sound: "tink", keyCode: 76 },
];

const Drumkit = () => {
  function playSound(e) {
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    setItemsPlaying({ ...itemsPlaying, [e.keyCode]: true });
    audio.currentTime = 0;
    audio.play();
  }

  const [itemsPlaying, setItemsPlaying] = useState(
    {}
  ); /* tuple = returns something similar to an array */

  useEffect(() => {
    window.addEventListener("keydown", playSound);
    return () => {
      window.removeEventListener("keydown", playSound);
    };
  }, [playSound]);

  return (
    <div>
      <Head>
        <title>Drum kit</title>
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
      </ul>
      <h1>Drum kit</h1>
      <div className="container">
        <div className="keys">
          {letters.map((letter) => {
            return (
              <div
                data-key={letter.keyCode}
                className={`key ${
                  itemsPlaying[letter.keyCode] ? "playing" : ""
                }`}
                onTransitionEnd={() => {
                  setItemsPlaying({ ...itemsPlaying, [letter.keyCode]: false });
                }}
              >
                <kbd>{letter.letter}</kbd>
                <span className="sound">{letter.sound}</span>
              </div>
            );
          })}
        </div>

        <audio data-key="65" src="/sounds/clap.wav"></audio>
        <audio data-key="83" src="/sounds/hihat.wav"></audio>
        <audio data-key="68" src="/sounds/kick.wav"></audio>
        <audio data-key="70" src="/sounds/openhat.wav"></audio>
        <audio data-key="71" src="/sounds/boom.wav"></audio>
        <audio data-key="72" src="/sounds/ride.wav"></audio>
        <audio data-key="74" src="/sounds/snare.wav"></audio>
        <audio data-key="75" src="/sounds/tom.wav"></audio>
        <audio data-key="76" src="/sounds/tink.wav"></audio>
      </div>
      <style jsx>{`
        ul {
          list-style: none;
        }

        ul li {
          margin-right: 20px;
          display: inline;
          justify: center;
        }

        ul li a {
          text-decoration: none;
        }

        .container {
          font-size: 10px;
          background: url("/drumkitBackgroundImage.jpg") bottom center;
          background-size: cover;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }

        .keys {
          display: flex;
          flex: 1;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
        }

        .key {
          border: 0.4rem solid black;
          border-radius: 0.5rem;
          margin: 1rem;
          font-size: 1.5rem;
          padding: 1rem 0.5rem;
          transition: all 0.07s ease;
          width: 10rem;
          text-align: center;
          color: white;
          background: rgba(0, 0, 0, 0.4);
          text-shadow: 0 0 0.5rem black;
        }

        .playing {
          transform: scale(1.1);
          border-color: #ffc600;
          box-shadow: 0 0 1rem #ffc600;
        }

        kbd {
          display: block;
          font-size: 4rem;
        }

        .sound {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: #ffc600;
        }
      `}</style>
    </div>
  );
};

export default Drumkit;
