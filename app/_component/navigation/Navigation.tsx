// import { CgMenuLeft } from "react-icons/cg";
// import { IoClose } from "react-icons/io5";
import { IconSwitcher } from "./_component/IconSwitcher";

import "./index.css";

export const Navigation = () => {
  return (
    <div className="nav-container">
      <input type="checkbox" id="nav-input" />
      <label htmlFor="nav-input" className="nav-button flex-center">
        <IconSwitcher />
        {/* <div className="nav-icon text-2xl">
          <CgMenuLeft className="nav-icon-menu"/> <IoClose className="nav-icon-close"/>
        </div> */}
      </label>
      <div className="nav-bg-circular"></div>
      <nav className="nav-expand flex-center ">
        <ol>
          <li className="nav-item">About Natous</li>
          <li className="nav-item">Your benefit</li>
          <li className="nav-item">Popular Tours</li>
          <li className="nav-item">Stories</li>
          <li className="nav-item">Book Now</li>
        </ol>
      </nav>
    </div>
  );
};
