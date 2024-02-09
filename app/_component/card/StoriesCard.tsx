import Image from "next/image";
import { Heading, PText } from "..";
import "./index.css";
interface Props {
  cardHeading: string;
  cardContent: string;
  imgUrl: string;
  imgName: string;
}

const imageSize = 160;
export const StoriesCard = ({
  cardContent,
  cardHeading,
  imgName,
  imgUrl,
}: Props) => {
  return (
    <div className="stories-card shadow-big">
      <div className="min-h-40">
        <figure className="stories-shape mr-4">
          <Image
            src={imgUrl}
            alt={imgName}
            height={imageSize}
            width={imageSize}
            className="bg-cover"
          />
        </figure>
        <div className="h-full">
          <Heading content={cardHeading} addClass="font-bold text-xl mb-2" />
          <PText content={cardContent} />
        </div>
      </div>
    </div>
  );
};
