import React from "react";
import { HeadingSecondary, StoriesCard } from "..";

const heading1 = "I had the best week ever with my family";
const heading2 = "I had the best week ever with my family";
const content1 =
  "Last week was an absolute blast with my family, filled with laughter and unforgettable memories. From exploring new places together to sharing delicious meals, every moment was special. We bonded over shared experiences and cherished quality time spent with each other. Whether it was a cozy night in or an adventure outdoors, the joy of being surrounded by loved ones made it the best week ever. As we reminisce about our adventures, I am grateful for the precious moments we shared and eagerly look forward to making more memories together in the future.";
const content2 =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores labore, quisquam obcaecati recusandae tempora similique libero asperiores molestiae sint aspernatur rem sequi, odit distinctio quae porro deserunt nihil at eos!";
export const StoriesSection = () => {
  return (
    <section>
      <HeadingSecondary
        content="We make People genuinely happy"
        addClass={`py-2 mb-12`}
      />

      <div className="flex-center flex-col gap-12">
        <StoriesCard
          cardHeading={heading1}
          cardContent={content1}
          imgUrl={""}
          imgName={"JAn pre"}
        />
        <StoriesCard
          cardHeading={heading2}
          cardContent={content2}
          imgUrl={""}
          imgName={"Aug gun"}
        />
      </div>
    </section>
  );
};
