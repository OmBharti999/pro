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
        <Heading content="I had the best week ever with my family" />
        <PText content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores labore, quisquam obcaecati recusandae tempora similique libero asperiores molestiae sint aspernatur rem sequi, odit distinctio quae porro deserunt nihil at eos!" />
      </div>
    </div>
  );
};
