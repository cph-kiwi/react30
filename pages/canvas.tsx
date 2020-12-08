import React, { useState, useEffect, useRef, MouseEvent } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
          box-sizing: border-box;
          background: #ffd1dc;
          font-family: "helvetica neue";
          font-size: 20px;
          font-weight: 200;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
        }

        body {
          margin: 0;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
`;

const Canvas = () => {
  const canvasref = useRef<HTMLCanvasElement>(null);
  const context =
    canvasref.current === null ? null : canvasref.current.getContext("2d");

  useEffect(() => {
    if (!context) return;
    context.strokeStyle = "#7fffd4";
    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 20;
  }, [context]);

  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const [hue, setHue] = useState(0);
  const [thickness, setThickness] = useState(true);

  function draw(e: MouseEvent<HTMLCanvasElement>) {
    if (!isDrawing || !context) return;
    const offsetX = e.clientX - (canvasref.current?.offsetLeft ?? 0);
    const offsetY = e.clientY - (canvasref.current?.offsetTop ?? 0);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(offsetX, offsetY);
    context.stroke();

    setLastX(offsetX);
    setLastY(offsetY);
    setHue(hue + 1 >= 360 ? 0 : hue + 1);
    const newThickness =
      context.lineWidth >= 100 || context.lineWidth <= 1
        ? !thickness
        : thickness;
    setThickness(newThickness);
    if (newThickness) {
      context.lineWidth++;
    } else {
      context.lineWidth--;
    }
  }

  return (
    <Wrapper>
      <GlobalStyles />
      <Head>
        <title>Canvas</title>
      </Head>
      <Navbar />
      <Heading>
        <h1>Canvas</h1>
      </Heading>
      <DrawArea
        id="draw"
        ref={canvasref}
        width={500}
        height={500}
        onMouseMove={draw}
        onMouseDown={(e) => {
          setIsDrawing(true);
          const offsetX = e.clientX - (canvasref.current?.offsetLeft ?? 0);
          const offsetY = e.clientY - (canvasref.current?.offsetTop ?? 0);
          setLastX(offsetX);
          setLastY(offsetY);
        }}
        onMouseUp={(e) => {
          setIsDrawing(false);
        }}
        onMouseOut={(e) => {
          setIsDrawing(false);
        }}
      ></DrawArea>
      <a href={canvasref.current?.toDataURL("image/png")}>Download</a>
      <Footer />
    </Wrapper>
  );
};

const Heading = styled.div`
  display: flex;
  text-align: center;

  h1 {
    flex: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DrawArea = styled.canvas`
  width: 500px;
  height: 500px;
  border: 3px solid black;
  border-radius: 8px;
  background-color: white;
`;

export default Canvas;

/*
    <script>
      const canvas = document.querySelector("#draw"); // grab the canvas
      const context = canvas.getContext("2d"); // set up the context

      canvas.width = window.innerWidth; // set up the size of the canvas to equal the size of the window.
      canvas.height = window.innerHeight;

      context.strokeStyle = "#7fffd4"; // a colour must be specified
      context.lineJoin = "round"; // this rounds off the start point
      context.lineCap = "round"; // this rounds off the ends of the line drawn
      context.lineWidth = 20;

      // context.globalCompositeOperation = 'multiply'; // this layers the colours on top of each other until the entire screen is black

      // next we need some dummy variables
      let isDrawing = false; // this indicates that when the mouse is not held down, then there is no drawing happening
      let lastX = 0; // these indicate a starting point for the line(drawing) to begin
      let lastY = 0;

      let hue = 0; // this variable changes the colour of the stroke - https://mothereffinghsl.com/
      let thickness = true; // this variable changes the thickness of the stroke

      // next up we need a function called draw
      function draw(e) {
        if (!isDrawing) return; // if they're not drawing, then return. Will stop the function from running when they are not moused down.
        console.log(e);
        context.strokeStyle = `hsl(${hue}, 100%, 50%)`; // this changes the colour of the stroke - https://mothereffinghsl.com/

        context.beginPath();
        // start from
        context.moveTo(lastX, lastY);
        // go to
        context.lineTo(e.offsetX, e.offsetY); // these values are coming from the event
        context.stroke();
        // the above lines that just been setting up the page until we call stroke
        // need to update the lastX and lastY variables
        // lastX = e.offsetX;
        // lastY = e.offsetY; // both these variable can be set on one line...
        [lastX, lastY] = [e.offsetX, e.offsetY]; // destructuring an array
        hue++; // https://mothereffinghsl.com/
        if (hue >= 360) {
          hue = 0;
        }
        if (context.lineWidth >= 100 || context.lineWidth <= 1) {
          thickness = !thickness;
        }
        if (thickness) {
          context.lineWidth++; // this gradually increases the stroke width
        } else {
          context.lineWidth--;
        }
      }

      canvas.addEventListener("mousedown", (e) => {
        // this updates the position of the mouse so that it starts drawing from the new position
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
      canvas.addEventListener("mousemove", draw); // when I move the mouse on the canvas it's going to console.log the draw function
      canvas.addEventListener("mouseup", () => (isDrawing = false));
      canvas.addEventListener("mouseout", () => (isDrawing = false)); // when the mouse goes out of the window, the drawing ends
    </script>
*/
