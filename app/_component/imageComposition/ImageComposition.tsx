import Image from "next/image";
import React from "react";

import "./index.css";

export const ImageComposition = () => {
  return (
    <div className="relative">
      <Image
        src={"/assets/image-1.jpg"}
        alt=""
        width={200}
        height={140}
        className="left-0 top-6 img-big-effect"
      />
      <Image
        src={"/assets/image-2.jpg"}
        alt=""
        width={200}
        height={140}
        className="left-64 top-20 img-big-effect"
      />
      <Image
        src={"/assets/image-3.jpg"}
        alt=""
        width={200}
        height={140}
        className="left-24 top-48 img-big-effect"
      />
    </div>
  );
};
