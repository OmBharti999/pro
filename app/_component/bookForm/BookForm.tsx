import { HeadingSecondary } from "..";

export const BookForm = () => {
  return (
    <div className="w-1/2 p-12">
      <HeadingSecondary content="Start booking Now!" addClass="py-2 mb-12" />
      <form>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" required className="form-input" />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" required className="form-input" />
      </form>
    </div>
  );
};
