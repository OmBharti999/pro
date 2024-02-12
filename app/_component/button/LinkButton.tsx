import Link from "next/link";
import React from "react";
import { PText } from "..";

interface Props {
  url: string;
  addClass: string | undefined;
  afterBtnBg?: string | undefined;
  btnName: string;
}

export const LinkButton = ({
  url,
  addClass,
  btnName,
  afterBtnBg = "after:bg-white",
}: Props) => {
  return (
    <Link href={url} className={`${addClass} ${afterBtnBg} btn`}>
      <PText content={btnName} addClass={"font-medium"} />
    </Link>
  );
};
