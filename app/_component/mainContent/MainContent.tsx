import React from "react";
import {
  Heading,
  HeadingSecondary,
  LinkButtonSimple,
  PText,
} from "@/app/_component";

import "./index.css";
import Link from "next/link";

export const MainContent = () => {
  return (
    <>
      <section className="section-about md:px-12 lg:px-20">
        <HeadingSecondary
          content="Exciting tour for adventure people"
          addClass="py-2 mb-14"
        />
        <div className="flex container mx-auto py-4 gap-28">
          <aside className="w-1/2 flex flex-col gap-4">
            <Heading
              addClass="mt-6"
              content="You'r going to fall in love with nature"
            />
            <PText content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur ad accusantium, exercitationem recusandae placeat itaque perferendis quisquam, quis, hic alias velit dolore provident facilis?" />
            <Heading
              addClass="mt-6"
              content="Live adventures like you have never before"
            />
            <PText content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ullam amet dolor assumenda suscipit provident enim rem sint ea nihil." />
            <LinkButtonSimple
              url={"/"}
              btnName={"Learn more →"}
              addClass="mt-4"
            />
          </aside>
          <aside className="w-1/2">fdsh</aside>
        </div>
      </section>
    </>
  );
};
