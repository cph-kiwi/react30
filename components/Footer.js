import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-p">
        Original project by{" "}
        <Link href="https://wesbos.com/">
          <a>Wes Bos</a>
        </Link>{" "}
        for{" "}
        <Link href="https://javascript30.com/">
          <a>JavaScript30</a>
        </Link>
        .
        <br />
        Personalised with care by{" "}
        <Link href="https://cph.kiwi/">
          <a>Beth Jackson</a>
        </Link>
        .
      </p>

      <style jsx>{`
        .footer {
          position: absolute;
          bottom: 0;
          color: white;
          font-size: 0.8rem;
        }

        .footer a:link {
          color: white;
        }

        .footer a:visited {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Footer;
