import React from "react";
import "../styles/Card.css";
import { UpperContainer } from "./UpperContainer";
import { LowerContainer } from "./LowerContainer";

function Card() {
  return (
    <div className="card">
      <UpperContainer />
      <LowerContainer />
    </div>
  );
}

export { Card };
