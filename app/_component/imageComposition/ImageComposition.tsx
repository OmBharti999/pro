import Image from "next/image";
import React from "react";

export const ImageComposition = () => {
  return (
    <div className="relative">
      <Image
        src={"/assets/image-1.jpg"}
        alt=""
        width={200}
        height={140}
        className="shadow-xl bg-cover absolute left-0 top-4"
      />
      <Image
        src={"/assets/image-2.jpg"}
        alt=""
        width={200}
        height={140}
        className="shadow-xl bg-cover absolute left-72 top-20"
      />
      <Image
        src={"/assets/image-3.jpg"}
        alt=""
        width={200}
        height={140}
        className="shadow-xl bg-cover absolute left-24 top-48"
      />
    </div>
  );
};
