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
        <CardWithBack
          src={"assets/image-1.jpg"}
          price="$ 150"
          peopleCount="upto 20 people"
          guidsCount="2 tour guids"
          difficulty="Difficulty: very easy"
          highlight="sleep in coosy hotel"
        />
        <CardWithBack
          src={"assets/image-2.jpg"}
          price="$ 250"
          peopleCount="upto 35 people"
          guidsCount="3 tour guids"
          difficulty="Difficulty: very medium"
          highlight="sleep in coosy hotel"
        />
        <CardWithBack
          src={"assets/image-3.jpg"}
          price="$ 300"
          highlight="sleep in coosy hotel"
          peopleCount="upto 50 people"
          guidsCount="4 tour guids"
          difficulty="Difficulty: very hard"
        />
      </div>
    </section>
  );
};
