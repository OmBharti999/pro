import "./index.css";

export const CardWithBack = () => {
  return (
    <div className="card-with-back">
      <div className="card-front">
        <div>
          <img src="" />
        </div>
        <div>
          <h4>{"5 dollar"}</h4>
          <h6>{"upto 20 people"}</h6>
          <h6>{"2 tour guids"}</h6>
          <h6>{"sleep in coosy hotel"}</h6>
          <h6>{"Difficulty: very easy"}</h6>
        </div>
      </div>
      <div className="card-back"> back</div>
    </div>
  );
};
