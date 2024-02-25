import { Heading, LinkButton } from "..";
import "./index.css";

interface Props {
  src: string;
  imgAlt: string;
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
  imgAlt,
  difficulty,
  highlight,
  fromCardBackBg = "#ff8a00",
  toCardBackBg = "#da1b60",
}: Props) => {
  const imageHeadingArr = imgAlt.split(" ");
  const imgHeading1 = imageHeadingArr.slice(0, 2).join(" ");
  const imgHeading2 = imageHeadingArr.slice(2, 3).join(" ");

  return (
    <div className="card-with-back flex-center my-1 shadow-2xl">
      <div className="card-front">
        <section className="img-section">
          <div
            className={`card-with-back-img relative`}
            style={{
              background: `linear-gradient(to right, ${fromCardBackBg}, ${toCardBackBg}), url(${src})`,
            }}
          ></div>
          <div
            className="img-description"
            style={{
              background: `${toCardBackBg}`,
            }}
          >
            <div className="heading-container top-36 right-4">
              <Heading content={imgHeading1} addClass="bg-inherit text-right" />
            </div>
            <div className="heading-container top-44 right-8">
              <Heading content={imgHeading2} addClass="bg-inherit text-right" />
            </div>
          </div>
        </section>

        <div className="text-center capitalize">
          <Heading content={price} addClass="py-3 border-b-2" />
          <Heading content={peopleCount} addClass="py-3 border-b-2" />
          <Heading content={price} addClass="py-3 border-b-2" />
          <Heading content={highlight} addClass="py-3 border-b-2" />
          <Heading content={guidsCount} addClass="py-3 border-b-2" />
          <Heading content={`Difficulty: ${difficulty}`} addClass="py-3" />
        </div>
      </div>
      <div
        className={`card-back flex-center`}
        style={{
          background: `linear-gradient(135deg, ${fromCardBackBg}, ${toCardBackBg})`,
        }}
      >
        <div className="text-center">
          <Heading content={"Only"} addClass="text-2xl mb-2" />
          <Heading content={price} addClass="text-5xl" />
          <LinkButton
            url="#popup"
            addClass={`mt-8 bg-white`}
            btnName="Book Now"
          />
        </div>
      </div>
    </div>
  );
};
