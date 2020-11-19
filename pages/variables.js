import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Variables = () => {
  return (
    <div className="body">
      <Head>
        <title>Variables</title>
      </Head>
      <Navbar />
      <div className="heading">
        <h1>Scoped CSS Variables and JS</h1>
      </div>

      <div className="container">
        <h2>
          Update CSS Variables with <span className="hl">JS</span>
        </h2>

        <div className="controls">
          <label for="spacing">Spacing:</label>
          <input
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
            value="10"
            data-unit="px"
          />

          <label for="blur">Blur:</label>
          <input
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            value="10"
            data-unit="px"
          />

          <label for="base">Base Color</label>
          <input id="base" type="color" name="base" value="#ffc600" />
        </div>

        <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
      </div>
      <Footer />
      <style jsx>{`
        :root {
          --base: #ffc600;
          --spacing: 10px;
          --blur: 10px;
          filter: blur(var(--blur));
        }

        img {
          padding: var(--spacing);
          background: var(--base);
        }

        .hl {
          color: var(--base);
        }

        /*
      misc styles, nothing to do with CSS variables
    */

        body {
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
