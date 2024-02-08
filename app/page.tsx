import Image from "next/image";
import {
  CardsSection,
  Features,
  Header,
  MainContent,
  StoriesSection,
} from "./_component";

export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <Features />
      <CardsSection />
      <StoriesSection />
    </>
  );
}
