import Image from "next/image";
import React from "react";

import "./index.css";

const commonWidth = 240;
const commonHeight = 180;

export const ImageComposition = () => {
  return (
    <div className="relative">
      <Image
        src={"/assets/image-1.jpg"}
        alt=""
        width={commonWidth}
        height={commonHeight}
        className="left-0 top-0 img-big-effect"
      />
      <Image
        src={"/assets/image-2.jpg"}
        alt=""
        width={commonWidth}
        height={commonHeight}
        className="left-72 top-20 img-big-effect"
      />
      <Image
        src={"/assets/image-3.jpg"}
        alt=""
        width={commonWidth}
        height={commonHeight}
        className="left-24 top-48 img-big-effect"
      />
    </div>
  );
};
