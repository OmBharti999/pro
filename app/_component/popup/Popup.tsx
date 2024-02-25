import Image from "next/image";
import { Heading, HeadingSecondary } from "..";
import "./index.css";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

export const Popup = () => {
  return (
    <div className="popup flex-center " id="popup">
      <div className="popup_content relative">
        <Link href={""}>
          <CgClose className=" absolute right-10 top-8 text-black" />
        </Link>
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
          <HeadingSecondary content="Start Booking Now" addClass="py-2 mb-8" />

          <h3 className="text-gray-600 font-bold mb-6">
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
          <div className="mt-4">
            <button className="btn bg-green-500 text-white">Book Now</button>
          </div>
        </section>
      </div>
    </div>
  );
};
