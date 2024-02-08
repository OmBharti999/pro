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
      <figure className="stories-shape"></figure>
      <div>
        <Heading content={cardHeading} />
        <PText content={cardContent} />
      </div>
    </div>
  );
};
