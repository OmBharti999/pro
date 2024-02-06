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
        <div className="flex-center max-md:flex-col justify-evenly w-full max-md:gap-10 gap-4">
          <CardWithBack
            src={"assets/image-1.jpg"}
            price="$ 150"
            peopleCount="upto 20 people"
            guidsCount="2 tour guids"
            difficulty="Difficulty: very easy"
            highlight="sleep in coosy hotel"
            btnBg="bg-orange-500"
            cardBackBg="bg-orange-100"
            fromCardBackBg="orangered"
            toCardBackBg="#FF7F50"
          />
          <CardWithBack
            src={"assets/image-2.jpg"}
            price="$ 250"
            peopleCount="upto 35 people"
            guidsCount="3 tour guids"
            difficulty="Difficulty: very medium"
            highlight="sleep in coosy hotel"
            btnBg="bg-green-500"
            cardBackBg="bg-green-100"
            fromCardBackBg="#98FB98"
            toCardBackBg="#3CB371"
          />
          <CardWithBack
            src={"assets/image-3.jpg"}
            price="$ 300"
            highlight="sleep in coosy hotel"
            peopleCount="upto 50 people"
            guidsCount="4 tour guids"
            difficulty="Difficulty: very hard"
            btnBg="bg-blue-500"
            cardBackBg="bg-blue-100"
            fromCardBackBg="#ADD8E6"
            toCardBackBg="#4682B4"
          />
        </div>
      </div>
    </section>
  );
};
