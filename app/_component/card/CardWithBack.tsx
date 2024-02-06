import { Heading } from "..";
import "./index.css";

interface Props {
  src: string;
  price: string;
  peopleCount: string;
  guidsCount: string;
  difficulty: string;
  highlight: string;
  fromCardBackBg: string;
  toCardBackBg: string;
}

export const CardWithBack = ({
  src,
  price,
  peopleCount,
  guidsCount,
  difficulty,
  highlight,
  fromCardBackBg = "#ff8a00",
  toCardBackBg = "#da1b60",
}: Props) => {
  return (
    <div className="card-with-back flex-center my-1">
      <div className="card-front">
        <div
          className={`card-with-back-img`}
          style={{
            background: `linear-gradient(to right, ${fromCardBackBg}, ${toCardBackBg}), url(${src})`,
          }}
        >
          {/* <img src={src} className="card-with-back-img" /> */}
        </div>
        <div className="text-center">
          <Heading content={price} addClass="py-3 border-b-2" />
          <Heading content={peopleCount} addClass="py-3 border-b-2" />
          <Heading content={price} addClass="py-3 border-b-2" />
          <Heading content={highlight} addClass="py-3 border-b-2" />
          <Heading content={guidsCount} addClass="py-3 border-b-2" />
          <Heading content={difficulty} addClass="py-3" />
        </div>
      </div>
      <div
        className={`card-back flex-center`}
        style={{
          background: `linear-gradient(45deg, ${fromCardBackBg}, ${toCardBackBg})`,
        }}
      >
        <div className="text-center">
          <Heading content={price} addClass="text-5xl" />
          <button className={`py-3 px-8 rounded-full mt-8 bg-white`}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
