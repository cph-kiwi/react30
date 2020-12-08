import Head from "next/head";
import Link from "next/link";
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

        .wrapper {
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}
`;

function Index() {
  return (
    <div className="wrapper">
      <GlobalStyles />
      <Head>
        <title>React30 by CPH-Kiwi</title>
      </Head>
      <h1>React30</h1>
      <p>Wes Bos' JavaScript30 projects rewritten using React</p>
      <UnorderedList>
        <li>
          <Link href="/drumkit">
            <a className="nav-link">Drum kit</a>
          </Link>
        </li>
        <li>
          <Link href="/clocks">
            <a className="nav-link">Clocks</a>
          </Link>
        </li>
        <li>
          <Link href="/variables">
            <a className="nav-link">CSS Variables</a>
          </Link>
        </li>
        <li>
          <Link href="/flex-panels-image-gallery">
            <a className="nav-link">Flex panels image gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/type-ahead">
            <a className="nav-link">Type ahead</a>
          </Link>
        </li>
        <li>
          <Link href="/canvas">
            <a className="nav-link">Canvas</a>
          </Link>
        </li>
        <li>
          <Link href="/check-multiple-checkboxes">
            <a className="nav-link">Hold shift and check multiple checkboxes</a>
          </Link>
        </li>
      </UnorderedList>
    </div>
  );
}

export default Index;

const UnorderedList = styled.ul`
  list-style: none;

  & li {
    margin-right: 20px;
  }

  & li a {
    text-decoration: none;
    color: black;
  }

  & li a:link {
    color: black;
  }

  & li a:visited {
    text-decoration: none;
    color: black;
  }
`;
