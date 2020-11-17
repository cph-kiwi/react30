import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = 1000;
    const clock = setInterval(() => {
      setNow(new Date());
    }, interval);
    return () => {
      clearInterval(clock);
    };
  }, []);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  return (
    <div className="body">
      <Head>
        <title>Clock</title>
      </Head>
      <Navbar />
      <div className="heading">
        <h1>Clock</h1>
      </div>
      <div className="clock-container">
        <div className="clock-face">
          <div
            className="hand hour-hand"
            style={{
              transform: `rotate(${
                (hour / 12) * 360 + (minutes / 60) * 30 + 90
              }deg)`,
            }}
          ></div>
          <div
            className="hand min-hand"
            style={{
              transform: `rotate(${
                (minutes / 60) * 360 + (seconds / 60) * 6 + 90
              }deg)`,
            }}
          ></div>
          <div
            className="hand second-hand"
            style={{
              transform: `rotate(${(seconds / 60) * 360 + 90}deg)`,
            }}
          ></div>
        </div>
      </div>
      {now.toString()}
      <Footer />
      <style jsx>{`
        .body {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-size: 2rem;
          background: #ffd1dc;
          background-size: cover;
          font-family: "helvetica neue";
          text-align: center;
          flex: 1;
          align-items: center;
        }

        .heading {
          display: flex;
          text-align: center;
        }

        h1 {
          flex: 1;
        }

        .clock-container {
          width: 20rem;
          height: 20rem;
          border: 20px solid white;
          border-radius: 50%;
          margin: 50px auto;
          position: relative;
          padding: 2rem;
          box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
            inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .clock-face {
          position: relative;
          width: 100%;
          height: 100%;
          transform: translateY(
            -3px
          ); /* account for the height of the clock hands */
        }

        .hand {
          width: 50%;
          height: 6px;
          background: black;
          position: absolute;
          top: 50%;
          transform-origin: 100%;
          transform: rotate(90deg);
          transition: all 0.05s;
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
        }
      `}</style>
    </div>
  );
};

export default Clock;

/*
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();
*/
