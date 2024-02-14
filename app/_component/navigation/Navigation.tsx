import "./index.css";

export const Navigation = () => {
  return (
    <div className="fixed right-5 z-50">
      <div>
        <input type="checkbox" id="nav-input" />
        <label htmlFor="nav-input">Menu</label>
      </div>
      <nav className="nav-expand flex-center ">
        <ol>
          <li className="nav-item">About Natous</li>
          <li className="nav-item">Your benefit</li>
          <li className="nav-item">Popular Tours</li>
          <li className="nav-item">Stories</li>
          <li className="nav-item">Book Now</li>
        </ol>
      </nav>
    </div>
  );
};
