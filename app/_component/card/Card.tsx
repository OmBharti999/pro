// import Image from "next/image";
import React from "react";

import "./index.css";
import { Heading, PText } from "..";

export const Card = () => {
  return (
    <div className="card flex justify-center w-64 bg-gray-100 h-72">
      {/* <Image src={Globe} alt="globe-icon" width={100} height={100} /> */}
      <div className="flex w-11/12 flex-col justify-center items-center">
        {/* <Globe /> */}
        <h1 className="h-20">icon</h1>
        <Heading content="simple" addClass="mb-4"/>
        <PText addClass="text-center" content="dfsd fhkjsafl fahf fdshk hfkjsdhaj dfgklds fkjshfh fjksfhksf fdskhfh fjdf d kfkh ehhs fdsfh hfkseh fdkjs" />
      </div>
    </div>
  );
};
