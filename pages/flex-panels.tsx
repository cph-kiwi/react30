import React, { ReactNode, useState } from "react";
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

const Flexpanels = () => {
  return (
    <div>
      <GlobalStyles />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Flex Panels Image Gallery</title>
      </Head>
      <Navbar />
      <Panels>
        <FlexPanel img="https://source.unsplash.com/gYl-UtwNg_I/1500x1500">
          <p>Hey</p>
          <p>Let's</p>
          <p>Dance</p>
        </FlexPanel>

        <FlexPanel img="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500">
          <p>Give</p>
          <p>Take</p>
          <p>Receive</p>
        </FlexPanel>

        <FlexPanel img="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d">
          <p>Experience</p>
          <p>It</p>
          <p>Today</p>
        </FlexPanel>

        <FlexPanel img="https://source.unsplash.com/ITjiVXcwVng/1500x1500">
          <p>Give</p>
          <p>All</p>
          <p>You can</p>
        </FlexPanel>

        <FlexPanel img="https://source.unsplash.com/3MNzGlQM7qs/1500x1500">
          <p>Life</p>
          <p>In</p>
          <p>Motion</p>
        </FlexPanel>
      </Panels>
      <Footer />
    </div>
  );
};

const Panels = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
`;

export default Flexpanels;

type FlexPanelProps = { children: ReactNode; img: string };

const FlexPanel = (props: FlexPanelProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <Panel
      className={`panel ${open ? "open" : ""} ${active ? "open-active" : ""}`}
      onClick={() => setOpen(!open)}
      onTransitionEnd={(e) =>
        e.propertyName.includes("flex") ? setActive(!active) : ""
      }
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      {props.children}
    </Panel>
  );
};

const Panel = styled.div`
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

  & > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > *:first-child {
    transform: translateY(-100%);
  }
  &.open-active > *:first-child {
    transform: translateY(0);
  }
  & > *:last-child {
    transform: translateY(100%);
  }
  &.open-active > *:last-child {
    transform: translateY(0);
  }

  & p {
    text-transform: uppercase;
    font-family: "Amatic SC", cursive;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
    font-size: 2em;
  }

  & p:nth-child(2) {
    font-size: 4em;
  }

  &.open {
    font-size: 40px;
    flex: 5;
  }
`;
