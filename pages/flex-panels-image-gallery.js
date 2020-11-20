import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Flexpanels = () => {
  return (
    <div>
      <Head>
        <title>Flex Panels Image Gallery</title>
      </Head>
      <Navbar />
      <body>
        <div class="panels">
          <div class="panel panel1">
            <p>Hey</p>
            <p>Let's</p>
            <p>Dance</p>
          </div>
          <div class="panel panel2">
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </div>
          <div class="panel panel3">
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </div>
          <div class="panel panel4">
            <p>Give</p>
            <p>All</p>
            <p>You can</p>
          </div>
          <div class="panel panel5">
            <p>Life</p>
            <p>In</p>
            <p>Motion</p>
          </div>
        </div>
      </body>
      <Footer />
      <style jsx>{`
        html {
          box-sizing: border-box;
          background: #ffc600;
          font-family: "helvetica neue";
          font-size: 20px;
          font-weight: 200;
        }

        body {
          margin: 0;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        .panels {
          min-height: 100vh;
          overflow: hidden;
          display: flex;
        }

        .panel {
          background: #6b0f9c;
          box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
          color: white;
          text-align: center;
          align-items: center;
          /* Safari transitionend event.propertyName === flex */
          /* Chrome + FF transitionend event.propertyName === flex-grow */
          transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
            flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
          font-size: 20px;
          background-size: cover;
          background-position: center;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .panel1 {
          background-image: url(https://source.unsplash.com/gYl-UtwNg_I/1500x1500);
        }
        .panel2 {
          background-image: url(https://source.unsplash.com/rFKUFzjPYiQ/1500x1500);
        }
        .panel3 {
          background-image: url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d);
        }
        .panel4 {
          background-image: url(https://source.unsplash.com/ITjiVXcwVng/1500x1500);
        }
        .panel5 {
          background-image: url(https://source.unsplash.com/3MNzGlQM7qs/1500x1500);
        }

        /* Flex items */
        .panel > * {
          margin: 0;
          width: 100%;
          transition: transform 0.5s;
          flex: 1 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .panel > *:first-child {
          transform: translateY(-100%);
        }
        .panel.open-active > *:first-child {
          transform: translateY(0);
        }
        .panel > *:last-child {
          transform: translateY(100%);
        }
        .panel.open-active > *:last-child {
          transform: translateY(0);
        }

        .panel p {
          text-transform: uppercase;
          font-family: "Amatic SC", cursive;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
          font-size: 2em;
        }

        .panel p:nth-child(2) {
          font-size: 4em;
        }

        .panel.open {
          font-size: 40px;
          flex: 5;
        }
      `}</style>
    </div>
  );
};

export default Flexpanels;

/*
    <script>
      const panels = document.querySelectorAll(".panel"); // gives a node list of all elements with .panel as a class
      function toggleOpen() {
        this.classList.toggle("open");
      }

      function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes("flex")) {
          this.classList.toggle("open-active");
        }
      }

      panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
      panels.forEach((panel) =>
        panel.addEventListener("transitionend", toggleActive)
      );
    </script>
*/
