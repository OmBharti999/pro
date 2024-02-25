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
      <section className="section-about">
        <HeadingSecondary
          content="Exciting tour for adventure people"
          addClass="py-2 mb-12 text-center"
        />
        <div className="flex-center max-w-[96rem] max-lg:flex-col-reverse mx-auto py-4 md:gap-12 lg:gap-10 mt-8">
          <aside className="w-full flex flex-col justify-center items-end ">
            <div className="md:11/12 2xl:w-10/12  gap-4">
              <Heading
                addClass="mt-4 mb-2 text-xl"
                content="You'r going to fall in love with nature"
              />
              <PText content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur ad quis, hic alias velit dolore provident facilis?" />
              <Heading
                addClass="mt-6 mb-2 text-xl"
                content="Live adventures like you have never before"
              />
              <PText content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ullam amet dolor assumenda suscipit provident enim rem sint ea nihil." />
              <LinkButtonSimple
                url={"/"}
                btnName={`Learn more →`}
                addClass="mt-4"
              />
            </div>
          </aside>
          <aside className="w-full min-h-96 flex-center">
            <div className="max-w-96 max-sm:max-w-80 w-full min-h-72">
              <ImageComposition />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
