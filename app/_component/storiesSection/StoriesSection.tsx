import React from "react";
import { HeadingSecondary, LinkButtonSimple, StoriesCard } from "..";

const heading1 = "I had the best week ever with my family";
const heading2 = "WOW! My life is completely different now";
const content1 =
  "Last week was an absolute blast with my family, filled with laughter and unforgettable memories. From exploring new places together to sharing delicious meals, every moment was special. We bonded over shared experiences and cherished quality time spent with each other. As we reminisce about our adventures, I am grateful for the precious moments we shared and eagerly look forward to making more memories together in the future.";
const content2 =
  "My life has undergone a remarkable transformation, and every day feels like a new adventure waiting to unfold. From embracing new opportunities to rediscovering passions, the journey has been exhilarating. I navigate through challenges with confidence and resilience. As I reflect on this newfound chapter, I am grateful for the growth and positive changes that have enriched my life beyond measure.";

export const StoriesSection = () => {
  return (
    <section className="relative h-full">
      <div className="w-full h-full absolute -z-10 opacity-15">
        <video
          loop
          autoPlay
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/assets/beach-video.mp4" />
        </video>
      </div>
      <div className="py-20">
        <HeadingSecondary
          content="We make People genuinely happy"
          addClass={`py-2 mb-12 text-center`}
        />

        <div className="flex-center flex-col gap-28 pt-10">
          <StoriesCard
            cardHeading={heading2}
            cardContent={content2}
            imgUrl={"/assets/girl.jpg"}
            imgName={"Marry Smith"}
          />
          <StoriesCard
            cardHeading={heading1}
            cardContent={content1}
            imgUrl={"/assets/boy.jpg"}
            imgName={"Jack Wilson"}
          />
        </div>
        <div className="flex-center mt-10">
          <LinkButtonSimple
            url={"#section-tour"}
            btnName={`Read all stories →`}
            addClass="mt-4"
          />
        </div>
      </div>
    </section>
  );
};
