import { HeadingSecondary } from "..";

export const BookForm = () => {
  return (
    <div className="max-sm:w-full max-lg:w-3/4 w-1/2 p-12">
      <HeadingSecondary content="Start booking Now!" addClass="py-2 mb-12" />
      <form className="form">
        <div className="form-fields">
          <input
            type="text"
            id="name"
            required
            className="form-input"
            placeholder="Your Name"
          />
          <label htmlFor="name" className="form-label label-prop">
            Your Name
          </label>
        </div>
        <div className="form-fields">
          <input
            type="email"
            id="email"
            required
            className="form-input"
            placeholder="Your Email"
          />
          <label htmlFor="email" className="form-label label-prop">
            Your Email
          </label>
        </div>
        <div className="form-fields lg:flex min-h-10 max-lg:min-h-20">
          <div className="w-1/2 max-lg:min-h-10">
            <input
              id="size"
              type="radio"
              name="size"
              required
              className="size-input"
            />
            <label htmlFor="size" className="form-label form-radio">
              <span className="flex-center size-radio"></span> small tour group
            </label>
          </div>
          <div className="w-1/2  max-lg:min-h-10">
            <input
              id="size-2"
              type="radio"
              name="size"
              required
              className="size-input"
            />
            <label htmlFor="size-2" className="form-label form-radio">
              <span className="flex-center size-radio"></span> large tour group
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button className="btn form-button">Next Step →</button>
        </div>
      </form>
    </div>
  );
};
