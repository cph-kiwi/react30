import Head from "next/head";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>React30 by CPH-Kiwi</title>
    </Head>
    <h1>React30</h1>
    <p>Wes Bos' JavaScript30 projects rewritten using React</p>
    <ul>
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
          <a className="nav-link">Scoped CSS Variables and JS</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        list-style: none;
      }

      ul li {
        margin-right: 20px;
      }

      ul li a {
        text-decoration: none;
        color: black;
      }

      ul li a:link {
        color: black;
      }

      ul li a:visited {
        text-decoration: none;
        color: black;
      }
    `}</style>
  </div>
);

export default Index;
