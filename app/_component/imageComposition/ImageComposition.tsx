import Image from "next/image";
import React from "react";

import "./index.css";

const commonWidth = 240;
const commonHeight = 190;

export const ImageComposition = () => {
  return (
    <div className="relative">
      <Image
        src={"/assets/image-1.jpg"}
        alt=""
        width={commonWidth}
        height={commonHeight}
        className="left-0 top-2 img-big-effect"
      />
      <Image
        src={"/assets/image-2.jpg"}
        alt=""
        width={commonWidth}
        height={commonHeight}
        className="left-52 top-20 img-big-effect"
      />
      <Image
        src={"/assets/image-3.jpg"}
        alt=""
        width={commonWidth}
        height={commonHeight}
        className="left-20 top-40 img-big-effect"
      />
    </div>
  );
};
