import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Variables = () => {
  const [blur, setBlur] = useState(0);
  const [spacing, setSpacing] = useState(0);
  const [color, setColor] = useState("#ffc600");

  useEffect(() => {}, [blur]);

  useEffect(() => {}, [spacing]);

  useEffect(() => {}, [color]);

  return (
    <div className="body">
      <Head>
        <title>CSS Variables</title>
      </Head>
      <Navbar />
      <div className="heading">
        <h1>Scoped CSS Variables</h1>
      </div>

      <div className="container">
        <h2>
          Update CSS Variables with <span className="hl">React</span>
        </h2>

        <div className="controls">
          <label for="spacing">Spacing:</label>
          <input
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
            value={spacing}
            data-unit="px"
            onChange={(e) => setSpacing(e.target.value)}
          />

          <label for="blur">Blur:</label>
          <input
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            value={blur}
            data-unit="px"
            onChange={(e) => setBlur(e.target.value)}
          />

          <label for="base">Base Color</label>
          <input
            id="base"
            type="color"
            name="base"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <img src="http://placekitten.com/200/300" />
      </div>
      <Footer />
      <style jsx>{`
        img {
          padding: var(--spacing);
          background: var(--base);
          filter: blur(var(--blur));
        }

        .hl {
          color: var(--base);
        }

        /*
      misc styles, nothing to do with CSS variables
    */

        .body {
          --base: ${color};
          --spacing: ${spacing}px;
          --blur: ${blur}px;
          position: relative;
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

        .container {
          text-align: center;
          background: #193549;
          color: white;
          font-family: "helvetica neue", sans-serif;
          font-weight: 100;
          font-size: 50px;
        }

        .controls {
          margin-bottom: 50px;
        }

        input {
          width: 100px;
        }
      `}</style>
    </div>
  );
};

export default Variables;

/*
    <script>
      const inputs = document.querySelectorAll(".controls input");

      function handleUpdate() {
        // console.log(this.value);
        // console.log(this.dataset);
        const suffix = this.dataset.unit || "";
        // console.log(suffix);
        // console.log(this.name);
        document.documentElement.style.setProperty(
          `--${this.name}`,
          this.value + suffix
        );
      }

      inputs.forEach((input) => input.addEventListener("change", handleUpdate));
      inputs.forEach((input) =>
        input.addEventListener("mousemove", handleUpdate)
      );
    </script>
*/
