import React from "react";

import "./index.css";

interface Props {
  content: string;
  addClass?: string;
  fontWeight?: string;
}

// text--->
export const PText = ({ content = "Text", addClass }: Props) => {
  return <p className={`${addClass}`}>{content}</p>;
};

// heading--->
export const Heading = ({
  content = "Text",
  addClass,
  fontWeight = "font-medium",
}: Props) => {
  return <h2 className={`${fontWeight} ${addClass}`}>{content}</h2>;
};

// prime heading should be used only once
export const PrimHeading = ({ content = "TextHeading", addClass }: Props) => {
  return <Heading addClass={`heading-primary ${addClass}`} content={content} />;
};

export const SubHeading = ({ content = "TextHeading", addClass }: Props) => {
  return (
    <Heading addClass={`heading-subprimary ${addClass}`} content={content} />
  );
};

export const HeadingSecondary = ({
  content = "TextHeadingSecondary",
  addClass,
}: Props) => {
  return (
    <Heading
      addClass={`heading-secondary text-4xl uppercase ${addClass}`}
      content={content}
    />
  );
};
