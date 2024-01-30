import React from "react";
import { Heading, HeadingSecondary, PText } from "@/app/_component";

import "./index.css";

export const MainContent = () => {
  return (
    <main>
      <section className="section-about">
        <HeadingSecondary content="Exciting tour for adventure people" />
        <div className="flex container mx-auto">
          <aside className="">
            <Heading content="You'r going to fall in love with nature" />
            <PText content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur ad accusantium, exercitationem recusandae placeat itaque perferendis quisquam, quis, hic alias velit dolore provident facilis?" />
            <Heading content="Live adventures like you have never before" />
            <PText content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ullam amet dolor assumenda suscipit provident enim rem sint ea nihil." />
          </aside>
          <aside></aside>
        </div>
      </section>
    </main>
  );
};
