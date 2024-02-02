import Image from "next/image";
import { CardsSection, Features, Header, MainContent } from "./_component";

export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <Features />
      <CardsSection />
    </>
    // <main className="w-full">
    // </main>
  );
}
