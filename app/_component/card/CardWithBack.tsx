import { Heading } from "..";
import "./index.css";

interface Props {
  src: string;
  price: string;
  peopleCount: string;
  guidsCount: string;
  difficulty: string;
  highlight: string;
  btnBg?: string;
  cardBackBg?: string;
}

export const CardWithBack = ({
  src,
  price,
  peopleCount,
  guidsCount,
  difficulty,
  highlight,
  btnBg = "bg-green-500",
  cardBackBg = "bg-green-100",
}: Props) => {
  return (
    <div className="card-with-back flex-center my-1">
      <div className="card-front">
        <div>
          <img src={src} width={"100%"} height={"12rem"} />
        </div>
        <div className="text-center">
          <Heading content={price} addClass="py-3 border-t-2 border-b-2" />
          <Heading
            content={peopleCount}
            addClass="py-3 border-t-2 border-b-2"
          />
          <Heading content={price} addClass="py-3 border-t-2 border-b-2" />
          <Heading content={highlight} addClass="py-3 border-t-2 border-b-2" />
          <Heading content={guidsCount} addClass="py-3 border-t-2 border-b-2" />
          <Heading content={difficulty} addClass="py-3 border-t-2 border-b-2" />
        </div>
      </div>
      <div className={`card-back flex-center ${cardBackBg}`}>
        <div className="text-center">
          <Heading content={price} addClass="text-5xl" />
          <button className={`py-3 px-8 rounded-full mt-8 ${btnBg}`}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
