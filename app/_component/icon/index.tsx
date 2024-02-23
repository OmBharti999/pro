import { DiYii } from "react-icons/di";
interface Props {
  varient?: "green" | "black" | "white";
}

export const MainIcon = ({ varient = "green" }: Props) => {
  // DiEnvato
  return (
    <div>
      <DiYii
        className={`text-7xl ${
          varient === "green" ? "text-lime-500" : `text-${varient}/90`
        }`}
      />
    </div>
  );
};
