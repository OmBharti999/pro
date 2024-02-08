import React from "react";
import { HeadingSecondary, StoriesCard } from "..";

export const StoriesSection = () => {
  return (
    <section>
      <HeadingSecondary
        content="We make People genuinely happy"
        addClass={`py-2 mb-12`}
      />

      <div className="flex-center flex-col gap-12">
        <StoriesCard />
        <StoriesCard />
      </div>
    </section>
  );
};
