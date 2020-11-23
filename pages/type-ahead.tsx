import React, { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  background: #ffd1dc;
  font-family: 'helvetica neue';
  font-size: 20px;
  font-weight: 200;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

type city = { city: string; population: string; state: string };

function findMatches(wordToMatch: string, cities: city[]) {
  return cities
    .filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    })
    .slice(0, 10);
}

function numberWithCommas(x: string) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Typeahead = () => {
  const [input, setInput] = useState("");

  const [cities, setCities] = useState<city[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then((blobOfData) => blobOfData.json())
      .then((rawData) => setCities(rawData));
  }, []);
  console.table(cities);

  const matchCities = findMatches(input, cities);

  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>Type Ahead</title>
      </Head>
      <Navbar />
      <Heading>
        <h1>Type Ahead</h1>
      </Heading>
      <Form>
        <input
          type="text"
          className="search"
          placeholder="City or State"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ul className="suggestions">
          {input === "" ? (
            <>
              <li>Filter for a city</li>
              <li>or a state</li>
            </>
          ) : null}
          {input !== ""
            ? matchCities.map((city) => (
                <li key={city.city}>
                  <span className="name">
                    {city.city}, {city.state}
                  </span>
                  <span className="population">
                    {numberWithCommas(city.population)}
                  </span>
                </li>
              ))
            : null}
        </ul>
      </Form>
      <Footer />
    </div>
  );
};

const Heading = styled.div`
  display: flex;
  text-align: center;

  h1 {
    flex: 1;
  }
`;

const Form = styled.form`
  max-width: 400px;
  margin: 50px auto;

  input {
    width: 100%;
    padding: 20px;
  }

  input.search {
    margin: 0;
    text-align: center;
    outline: 0;
    border: 10px solid #f7f7f7;
    width: 120%;
    left: -10%;
    position: relative;
    top: 10px;
    z-index: 2;
    border-radius: 5px;
    font-size: 40px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
  }

  .suggestions {
    margin: 0;
    padding: 0;
    position: relative;
  }

  .suggestions li {
    background: white;
    list-style: none;
    border-bottom: 1px solid #d8d8d8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }

  .suggestions li:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
  }

  .suggestions li:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
  }

  span.population {
    font-size: 15px;
  }

  .hl {
    background: #ffc600;
  }
`;

export default Typeahead;

/*
<script>
      const endpoint =
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

      const cities = [];

      // const promise = fetch(endpoint);
      // console.log(promise);

      fetch(endpoint) // fetch returns a promise
        .then((blobOfData) => blobOfData.json()) // we know the blobOfData is a json, but it doesn't know what kind of data it is yet. It could be an image etc.
        .then((rawData) => cities.push(...rawData)); // blobOfData.json() returns another promise

      function findMatches(wordToMatch, cities) {
        return cities.filter((place) => {
          // here we need to figure out if the city or state matches what was searched.
          const regex = new RegExp(wordToMatch, "gi");
          return place.city.match(regex) || place.state.match(regex);
        });
      }

      function numberWithCommas(x) {
        // function to format the population display
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Wes Bos copied out this regex from somewhere else.
      }

      function displayMatches() {
        // console.log(this.value);
        const matchArray = findMatches(this.value, cities);
        // console.log(matchArray);
        const html = matchArray
          .map((place) => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            const stateName = place.state.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            return `
          <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
          </li>
          `;
          })
          .join("");
        suggestions.innerHTML = html;
      }

      const searchInput = document.querySelector(".search");
      const suggestions = document.querySelector(".suggestions");

      searchInput.addEventListener("change", displayMatches);
      searchInput.addEventListener("keyup", displayMatches);
    </script>
*/
