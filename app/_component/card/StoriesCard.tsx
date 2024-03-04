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
    <div className="stories-card shadow-big bg-white/50">
      <div className="stories-card-inner  min-h-40">
        <figure className="stories-shape mr-8 relative">
          <Image
            src={imgUrl}
            alt={imgName}
            height={imageSize}
            width={imageSize}
          />
          <figcaption className="img-caption">{imgName}</figcaption>
        </figure>
        <div className="h-full">
          <Heading content={cardHeading} addClass="font-bold text-xl mb-2" />
          <PText content={cardContent} />
        </div>
      </div>
    </div>
  );
};
