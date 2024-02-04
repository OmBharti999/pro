import React from "react";
import { CardWithBack, HeadingSecondary } from "..";

export const CardsSection = () => {
  return (
    <section className="section-tours">
      <HeadingSecondary
        content="Most popular tours"
        addClass="py-2 mb-12 mt-16 "
      />
      <div>
        <CardWithBack />
        <CardWithBack />
        <CardWithBack />
      </div>
    </section>
  );
};
