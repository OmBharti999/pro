import React from "react";
import { Heading, HeadingSecondary, PText } from "@/app/_component";

import "./index.css";

export const MainContent = () => {
  return (
    <main>
      <section className="section-about">
        <HeadingSecondary content="Existing tour for adventure people" />
        <div className="flex">
          <aside>
            <Heading content="" />
            <PText content=""/>
            <Heading content="" />
          </aside>
          <aside></aside>
        </div>
      </section>
    </main>
  );
};
