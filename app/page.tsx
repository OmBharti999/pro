import Image from "next/image";
import {
  BookingSection,
  CardsSection,
  Features,
  Footer,
  Header,
  MainContent,
  Navigation,
  Popup,
  StoriesSection,
} from "./_component";

export default function Home() {
  return (
    <>
      <Popup />
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
