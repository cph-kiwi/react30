import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const Typeahead = () => {};

export default Typeahead;
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Type Ahead 👀</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form class="search-form">
      <input type="text" class="search" placeholder="City or State" />
      <ul class="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
    </form>
    
  </body>
</html>
*/

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

/*
html {
  box-sizing: border-box;
  background: #ffc600;
  font-family: 'helvetica neue';
  font-size: 20px;
  font-weight: 200;
}

*, *:before, *:after {
  box-sizing: inherit;
}

input {
  width: 100%;
  padding: 20px;
}

.search-form {
  max-width: 400px;
  margin: 50px auto;
}

input.search {
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #F7F7F7;
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
  border-bottom: 1px solid #D8D8D8;
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
  background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
}

.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
}

span.population {
  font-size: 15px;
}

.hl {
  background: #ffc600;
}
*/
