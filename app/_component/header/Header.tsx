import Image from "next/image";
import "./index.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-box">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">Is where life happens</span>
        </h1>
      </div>
      Header
    </header>
  );
};
