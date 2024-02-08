import React from "react";
import { CardWithBack, HeadingSecondary } from "..";

export const CardsSection = () => {
  return (
    <section className="section-tours">
      <HeadingSecondary
        content="Most popular tours"
        addClass="py-2 mb-12 mt-16 "
      />
      <div className="max-w-7xl flex-center mx-auto">
        <div className="flex-center max-md:flex-col flex-wrap justify-evenly w-full max-md:gap-20 gap-10 lg:gap-16 xl:gap-28">
          <CardWithBack
            src={"assets/image-1.jpg"}
            imgAlt="The sea Explorer"
            price="$ 150"
            peopleCount="upto 20 people"
            guidsCount="2 tour guids"
            difficulty="Very Easy"
            highlight="sleep in cosy hotel"
            fromCardBackBg="#FFA07A"
            toCardBackBg="#FF7F50"
          />
          <CardWithBack
            src={"assets/image-2.jpg"}
            imgAlt="The forest hiker"
            price="$ 250"
            peopleCount="upto 35 people"
            guidsCount="3 tour guids"
            difficulty="Medium"
            highlight="sleep in coosy hotel"
            fromCardBackBg="#98FB98"
            toCardBackBg="#3CB371"
          />
          <CardWithBack
            src={"assets/image-3.jpg"}
            imgAlt="the snow adventurer"
            price="$ 300"
            highlight="sleep in coosy hotel"
            peopleCount="upto 50 people"
            guidsCount="4 tour guids"
            difficulty="Hard"
            fromCardBackBg="#ADD8E6"
            toCardBackBg="#4682B4"
          />
        </div>
      </div>
    </section>
  );
};
