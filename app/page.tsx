import Image from "next/image";
import { Features, Header, MainContent } from "./_component";

export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <Features />
    </>
    // <main className="w-full">
    // </main>
  );
}
