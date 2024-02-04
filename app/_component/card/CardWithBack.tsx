import { Heading } from "..";
import "./index.css";

interface Props {
  src: string;
  price: string;
  peopleCount: string;
  guidsCount: string;
  difficulty: string;
  highlight: string;
  // peopleCount
}

export const CardWithBack = ({
  src,
  price,
  peopleCount,
  guidsCount,
  difficulty,
  highlight,
}: Props) => {
  return (
    <div className="card-with-back">
      <div className="card-front">
        <div>
          <img src={src} width={"100%"} height={"12rem"} />
        </div>
        <div>
          {/* <h4 className="py-3 border-t-2 border-b-2">{price}</h4> */}
          <Heading content={price} addClass="py-3 border-t-2 border-b-2" />
          <Heading
            content={peopleCount}
            addClass="py-3 border-t-2 border-b-2"
          />
          <Heading content={price} addClass="py-3 border-t-2 border-b-2" />
          {/* <h6>{"sleep in coosy hotel"}</h6> */}
          <Heading content={highlight} addClass="py-3 border-t-2 border-b-2" />
          {/* <h6>{guidsCount}</h6> */}
          <Heading content={guidsCount} addClass="py-3 border-t-2 border-b-2" />
          {/* <h6>{"Difficulty: very easy"}</h6> */}
          <Heading content={difficulty} addClass="py-3 border-t-2 border-b-2" />
        </div>
      </div>
      <div className="card-back">
        <Heading content={price} />
      </div>
    </div>
  );
};
