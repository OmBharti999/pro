import Link from "next/link";
import "./index.css";
export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white min-h-[35rem]">
      <div className="footer-logo flex-center min-h-80">{/* image */}logo</div>
      <div className="row flex justify-between gap-x-20 max-w-3xl mx-auto">
        <div className="part ">
          <ul className="flex gap-x-4  uppercase text-xs">
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
          <p className="text-gray-400">
            Build by{" "}
            <Link className="text-white/90" href={""}>
              Om
            </Link>{" "}
            for fun and learning. Copyright © by Om, you are absolutely free to use
            this in your production or self project just dont forget to mention
            me.
          </p>
        </div>
      </div>
    </footer>
  );
};
