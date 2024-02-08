import Link from "next/link";
import React from "react";
import { PText } from "..";

interface Props {
  url: string;
  addClass: string | undefined;
  btnName: string;
}

export const LinkButton = ({ url, addClass, btnName }: Props) => {
  return (
    <Link href={url} className={`${addClass} btn`}>
      <PText content={btnName} addClass={"font-medium"} />
    </Link>
  );
};
