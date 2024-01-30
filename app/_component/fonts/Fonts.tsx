import React from "react";

import "./index.css";

interface Props {
  content: string;
  addClass?: string;
}

// text--->
export const PText = ({ content = "Text", addClass }: Props) => {
  return <p className={`text-2xl ${addClass}`}>{content}</p>;
};

// heading--->
export const Heading = ({ content = "Text", addClass }: Props) => {
  return <h2 className={`text-3xl ${addClass}`}>{content}</h2>;
};

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
    <Heading addClass={`heading-secondary ${addClass}`} content={content} />
  );
};
