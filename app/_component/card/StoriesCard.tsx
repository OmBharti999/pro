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
        <figure className="stories-shape float-left rounded-full p-10">gs
        {/*  */}
        </figure>
        <div className="">
          <Heading content={cardHeading} addClass="font-bold text-xl" />
          <PText content={cardContent} />
        </div>
      </div>
    </div>
  );
};
