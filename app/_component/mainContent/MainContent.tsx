import React from "react";
import {
  Heading,
  HeadingSecondary,
  ImageComposition,
  LinkButtonSimple,
  PText,
} from "@/app/_component";

import "./index.css";

export const MainContent = () => {
  return (
    <>
      <section className="section-about md:px-12 lg:px-20">
        <HeadingSecondary
          content="Exciting tour for adventure people"
          addClass="py-2 mb-14"
        />
        <div className="flex max-w-[96rem] mx-auto py-4 md:gap-16 lg:gap-28">
          <aside className="w-full flex flex-col gap-4">
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
              btnName={`Learn more →`}
              addClass="mt-4"
            />
          </aside>
          <aside className="w-full md:pl-8">
            <ImageComposition />
          </aside>
        </div>
      </section>
    </>
  );
};
