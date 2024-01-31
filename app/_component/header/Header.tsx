// import Image from "next/image";
import { LinkButton } from "@/app/_component";

import "./index.css";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="logo-box">
        {/* <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h1>Logo</h1>
      </div>
      <div className="text-box">
        <h1 className="heading-primary flex flex-col gap-4">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">Is where life happens</span>
        </h1>
        <LinkButton
          addClass="btn-white btn-animated mt-10"
          url={"#"}
          btnName="Discover Our tour"
        />
      </div>
    </header>
  );
};
