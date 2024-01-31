import React from "react";
import { Card } from "..";
import "./index.css";

export const Features = () => {
  return (
    <>
      <section className="section-feature flex-wrap -skew-y-6">
        <div className="cards-container skew-y-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};
