import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Clock from "../components/Clock";
import moment from "moment-timezone";
import Footer from "../components/Footer";

const Clocks = () => {
  return (
    <div className="body">
      <Head>
        <title>Clocks</title>
      </Head>
      <Navbar />
      <div className="heading">
        <h1>Clocks</h1>
      </div>
      <div className="faces">
        <Clock timeZone="Pacific/Auckland" />
        <Clock timeZone={moment.tz.guess()} />
        <Clock timeZone="America/Los_Angeles" />
      </div>
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
          padding: 0;
          margin: 0;
        }

        .faces {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  );
};

export default Clocks;

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
/*
const secondHand = document.querySelector(".second-hand");
      const minuteHand = document.querySelector(".minute-hand");
      const hourHand = document.querySelector(".hour-hand");
      const allHands = document.querySelectorAll(".local-hand");

      function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = (360 / 60) * seconds + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = (360 / 60) * minutes + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = (360 / 12) * hours + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        if (secondsDegrees === 90) {
          allHands.forEach((hand) => (hand.style.transition = "none"));
        } else {
          allHands.forEach((hand) => (hand.style.transition = ""));
        }

        console.log("current Time: " + hours + ":" + minutes + ":" + seconds);
        document.getElementById("local-clock-time-string").innerHTML =
          hours + ":" + minutes + ":" + seconds;
      }

      setInterval(setDate, 1000);

      const nzSecondHand = document.querySelector(".nzSecond-hand");
      const nzMinuteHand = document.querySelector(".nzMinute-hand");
      const nzHourHand = document.querySelector(".nzHour-hand");
      const nzAllHands = document.querySelectorAll(".NZ-hand");

      function nzSetDate() {
        const nzNow = moment().tz("Pacific/Auckland");
        const nzSeconds = nzNow.seconds();
        const nzSecondsDegrees = (360 / 60) * nzSeconds + 90;
        nzSecondHand.style.transform = `rotate(${nzSecondsDegrees}deg)`;

        const nzMinutes = nzNow.minutes();
        const nzMinutesDegrees = (360 / 60) * nzMinutes + 90;
        nzMinuteHand.style.transform = `rotate(${nzMinutesDegrees}deg)`;

        const nzHours = nzNow.hours();
        const nzHoursDegrees = (360 / 12) * nzHours + 90;
        nzHourHand.style.transform = `rotate(${nzHoursDegrees}deg)`;

        if (nzSecondsDegrees === 90) {
          nzAllHands.forEach((hand) => (hand.style.transition = "none"));
        } else {
          nzAllHands.forEach((hand) => (hand.style.transition = ""));
        }

        console.log(
          "NZ current Time: " + nzHours + ":" + nzMinutes + ":" + nzSeconds
        );
        document.getElementById("NZ-clock-time-string").innerHTML =
          nzHours + ":" + nzMinutes + ":" + nzSeconds;
      }

      setInterval(nzSetDate, 1000);

*/
