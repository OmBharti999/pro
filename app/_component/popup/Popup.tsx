import { Heading, HeadingSecondary } from "..";
import "./index.css";

export const Popup = () => {
  return (
    <div className="popup flex-center">
      <div className="popup_content">
        <aside className="popup_content_left">{/* <img */}</aside>
        <section className="popup_content_right">
          <HeadingSecondary content="Start Booking Now" addClass="py-2 mb-12 text-left" />
         
          <h3 className="text-gray-700 font-bold text-left">
            IMPORTANT - PLEASE READ THE TERMS AND CONDITIONS FIRST
          </h3>
        </section>
      </div>
    </div>
  );
};
