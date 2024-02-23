"use client";

import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export function IconSwitcher() {
  const [tapped, setTapped] = useState(true);

  const switcher = () => {
    setTapped((p) => !p);
  };

  return (
    <div onClick={switcher} className="text-2xl">
      {tapped ? <CgMenuLeft /> : <IoClose />}
    </div>
  );
}
