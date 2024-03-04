import Link from "next/link";
import { MainIcon } from "../icon";

import "./index.css";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-slate-100 lg:min-h-[35rem] text-sm p-8">
      <div className="footer-logo flex-center lg:min-h-80 max-lg:mb-10">
        <MainIcon />
      </div>
      <div className="row flex justify-between gap-x-20 max-w-4xl mx-auto flex-wrap content-between min-h-52">
        <div className="part ">
          <ul className="flex gap-x-4 uppercase footer-nav-list flex-wrap">
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
        <div className="part lg:max-w-80">
          <div className="footer-copyright-text"></div>
          <p className="text-gray-400">
            Build by{" "}
            <Link className="text-white/90 footer-hover-effect" href={""}>
              Om
            </Link>{" "}
            for fun and learning. Copyright © by{" "}
            <span className="footer-hover-effect text-white/95">Om</span>, you
            are absolutely free to use this in your production or self project
            just dont forget to mention me.
          </p>
        </div>
      </div>
    </footer>
  );
};
