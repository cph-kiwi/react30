import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          text-align: center;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        ul li {
          margin-right: 20px;
          display: inline;
          justify: center;
        }

        ul li a {
          text-decoration: none;
        }

        ul li a:visited {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
