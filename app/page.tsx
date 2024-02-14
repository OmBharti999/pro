import Image from "next/image";
import {
  BookingSection,
  CardsSection,
  Features,
  Footer,
  Header,
  MainContent,
  Navigation,
  StoriesSection,
} from "./_component";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <MainContent />
      <Features />
      <CardsSection />
      <StoriesSection />
      <BookingSection />
      <Footer />
    </>
  );
}
