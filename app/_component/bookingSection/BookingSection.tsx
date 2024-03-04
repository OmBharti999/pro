import { BookForm } from "..";
import "./index.css";

export const BookingSection = () => {
  return (
    <section className="md:px-1 md:py-8 xl:p-14 flex-center bg-gradient-to-r from-green-500 to-green-700 py-28">
      <div className="max-w-6xl w-full book">
        <BookForm />
      </div>
    </section>
  );
};
