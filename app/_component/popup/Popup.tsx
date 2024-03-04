import Image from "next/image";
import { HeadingSecondary } from "..";
import { CgClose } from "react-icons/cg";

import "./index.css";

export const Popup = () => {
  return (
    <div className="popup flex-center" id="popup-section">
      <div className="popup_content relative">
        <a href="#section-tour">
          <CgClose className=" absolute right-10 top-8 text-black max-lg:text-amber-200 max-sm:text-black max-sm:top-4 max-sm:right-4" />
        </a>
        <aside className="popup_content_left">
          {/* <img */}
          <Image
            src="/assets/girl-tour.jpg"
            alt="tour photo"
            width={420}
            height={250}
          />

          <Image
            src="/assets/boy-tour.jpg"
            alt="tour photo"
            width={420}
            height={250}
            className="object-top"
          />
        </aside>
        <section className="popup_content_right">
          <HeadingSecondary
            content="Start Booking Now"
            addClass="py-2 mb-2 lg:mb-8 max-sm:text-lg max-lg:text-xl"
          />

          <h3 className="text-gray-600 font-bold mb-1 lg:mb-6 max-sm:text-sm max-lg:text-md">
            IMPORTANT - PLEASE READ THE TERMS AND CONDITIONS FIRST
          </h3>
          <p className="popup_description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            officia labore cum dolorum, nam ratione facere porro reprehenderit
            consequatur dolorem sed consectetur perferendis quia repudiandae
            vero repellendus. Delectus dolorem eligendi ipsum eum illo non
            cumque natus ipsam corporis nihil provident quis deleniti dolores,
            quidem modi placeat except. asperiores non magni. Deleniti minima
            labore quasi neque, quae enim. Nulla ipsum exercitationem placeat.
          </p>
          <div className="mt-1 lg:mt-4 flex justify-start">
            <button className="btn bg-green-500 text-white max-sm:scale-50 max-sm:-translate-x-14 max-lg:scale-90 max-lg:-translate-x-4">
              Book Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
