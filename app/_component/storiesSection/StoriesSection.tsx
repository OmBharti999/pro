import React from "react";
import { HeadingSecondary, StoriesCard } from "..";

const heading1="I had the best week ever with my family"
const heading2="I had the best week ever with my family"
const content1="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores labore, quisquam obcaecati recusandae tempora similique libero asperiores molestiae sint aspernatur rem sequi, odit distinctio quae porro deserunt nihil at eos!"
const content2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores labore, quisquam obcaecati recusandae tempora similique libero asperiores molestiae sint aspernatur rem sequi, odit distinctio quae porro deserunt nihil at eos!"
export const StoriesSection = () => {
  return (
    <section>
      <HeadingSecondary
        content="We make People genuinely happy"
        addClass={`py-2 mb-12`}
      />

      <div className="flex-center flex-col gap-12">
        <StoriesCard cardHeading={heading1} cardContent={content1} imgUrl={""} imgName={"JAn pre"}/>
        <StoriesCard cardHeading={heading2} cardContent={content2} imgUrl={""} imgName={"Aug gun"}/>
      </div>
    </section>
  );
};
