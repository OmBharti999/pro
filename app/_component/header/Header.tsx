// import Image from "next/image";
import { LinkButton, PrimHeading, SubHeading } from "@/app/_component";

import "./index.css";

export const Header = () => {
  return (
    <header className="max-w-full">
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
        <PrimHeading content="Outdoors" addClass="slide-left break-all" />
        <SubHeading
          content={"Is where life happens"}
          addClass="slide-right -ml-4"
        />
        <LinkButton
          addClass="btn-white btn-animated mt-20"
          url={"#"}
          btnName="Discover Our tour"
        />
      </div>
    </header>
  );
};
