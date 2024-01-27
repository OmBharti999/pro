import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  addClass: string;
  btnName: string;
}

export const LinkButton = ({ url, addClass, btnName }: Props) => {
  return (
    <Link href={url} className={`btn ${addClass}`}>
      {btnName}
    </Link>
  );
};
