import { HeadingSecondary } from "..";

export const BookForm = () => {
  return (
    <div className="w-1/2 p-12">
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
        <div className="form-fields ">
          <div className="my-4">
            <input id="size" type="radio" name="size" required />
            <label htmlFor="size" className="form-label form-radio">
              <span className="size-radio"></span> small tour group
            </label>
          </div>
          <div>
            <input id="size-2" type="radio" name="size" required />
            <label htmlFor="size-2" className="form-label form-radio">
              <span className="size-radio"></span> large tour group
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
