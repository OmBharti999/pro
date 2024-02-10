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
            placeholder="your name"
          />
          <label htmlFor="name" className="form-label">
            Name
          </label>
        </div>
        <div className="form-fields">
          <input
            type="email"
            id="email"
            required
            className="form-input"
            placeholder="your email"
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
      </form>
    </div>
  );
};
