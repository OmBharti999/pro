import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="footer-logo">{/* image */}logo</div>
      <div className="row">
        <div className="part">
          <ul>
            <li>
              <Link href={""}>company</Link>
            </li>
            <li>
              <Link href={""}>contact us</Link>
            </li>
            <li>
              <Link href={""}>careers</Link>
            </li>
            <li>
              <Link href={""}>privacy</Link>
            </li>
            <li>
              <Link href={""}>terms</Link>
            </li>
          </ul>
        </div>
        <div className="part">
          <div className="footer-copyright-text"></div>
          <p>
            Build by
            <Link href={""}>Om</Link> for fun and learning.
          </p>
        </div>
      </div>
    </footer>
  );
};
