import { Heading, PText } from "..";
import "./index.css";
interface Props {
  cardHeading: string;
  cardContent: string;
  imgUrl: string;
  imgName: string;
}

export const StoriesCard = ({
  cardContent,
  cardHeading,
  imgName,
  imgUrl,
}: Props) => {
  return (
    <div className="stories-card shadow-big">
      <div className="">
        <figure className="stories-shape mr-5">gs
        {/*  */}
        </figure>
        <div className="">
          <Heading content={cardHeading} addClass="font-bold text-xl mb-2" />
          <PText content={cardContent} />
        </div>
      </div>
    </div>
  );
};
