import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Clock = (props) => {
  const timeZone = props.timeZone;

  const [now, setNow] = useState(moment().tz(timeZone));

  useEffect(() => {
    const clock = setInterval(() => {
      setNow(moment().tz(timeZone));
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  const seconds = now.seconds();
  const minutes = now.minutes();
  const hour = now.hours();

  return (
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
      <div className="digi-time">
        <label>{timeZone}</label>
        <br />
        <span>
          {hour}:{minutes}:{seconds}
        </span>
      </div>
      <style jsx>{`
        .digi-time {
          margin-top: 100px;
          margin-bottom: 50px;
        }

        .clock-container {
          width: 20rem;
          height: 20rem;
          border: 20px solid white;
          border-radius: 50%;
          position: relative;
          padding: 2rem;
          box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
            inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
          margin-left: 25px;
          margin-right: 25px;
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

        .hour-hand {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default Clock;
