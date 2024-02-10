import { BookForm } from "..";
import "./index.css";

export const BookingSection = () => {
  return (
    <section className="p-14 flex-center bg-gradient-to-r from-green-500 to-green-700 h-screen">
      <div className="max-w-3xl w-full h-64 book">
        <BookForm />
      </div>
    </section>
  );
};
