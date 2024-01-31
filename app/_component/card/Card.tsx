import { Heading, PText } from "..";

import "./index.css";

export const Card = () => {
  return (
    <div className="card flex justify-center w-64 bg-gray-100 h-72">
      {/* <Image src={Globe} alt="globe-icon" width={100} height={100} /> */}
      <div className="flex w-11/12 flex-col justify-center items-center">
        {/* <Globe /> */}
        <h1 className="h-20">icon</h1>
        <Heading content="simple" addClass="mb-4"/>
        <PText addClass="text-center" content="dfsd kjs al fahf gds hk sdhaj dgklds shfh jsf skhh jdb d kkh ehs fdsfh hi seh dkjs" />
      </div>
    </div>
  );
};
