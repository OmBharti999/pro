import { LinkButton, PrimHeading, SubHeading } from "@/app/_component";
import { MainIcon } from "../icon";

import "./index.css";

export const Header = () => {
  return (
    <header className="max-w-full">
      <div className="logo-box">
        <MainIcon varient="white" />
      </div>
      <div className="text-box">
        <PrimHeading content="Outdoors" addClass="slide-left break-all" />
        <SubHeading
          content={"Is where life happens"}
          addClass="slide-right -ml-4"
        />
        <LinkButton
          addClass="btn-white btn-animated mt-20"
          url={"#section-tour"}
          btnName="Discover Our tour"
        />
      </div>
    </header>
  );
};
