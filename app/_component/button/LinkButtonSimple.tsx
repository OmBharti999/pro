import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  addClass?: string;
  btnName: string;
}

export const LinkButtonSimple = ({ url, addClass = "", btnName }: Props) => {
  return (
    <Link href={url} className={`btn-simple ${addClass}`}>
      {/* <PText content={btnName} addClass={"font-medium"} /> */}
      {btnName}
    </Link>
  );
};
